import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Messages from './dbMessages';
import Pusher from 'puhser';

const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://KimLe:kimle123@cluster0.c6nnpzt.mongodb.net/MessagingApp'

const pusher = new Pusher({
    appId: 'your-app-id',
    key: 'your-key',
    secret: 'your',
    cluster: 'your',
    useTLS: true
});

app.use(express.json())
app.use(Cors)

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.once('open', () => {
    console.log('DB connected')
    const msgCollection = db.collection('messagingmessages')
    const changeStream = msgCollection.watch()
    changeStream.on('change', change => {
        console.log(change)

        if(change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Puhser')
        }
    })
})

app.get('/', (req, res) => res.status(200).send('Hello UIT'))
app.post('/message/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})
app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => console.log(`Listening on localhost: ${port}`))