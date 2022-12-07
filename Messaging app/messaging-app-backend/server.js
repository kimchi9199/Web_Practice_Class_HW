const express = require('express'); 
const mongoose = require('mongoose'); 
const Cors = require('cors');
const Messages = require('./dbMessages');
const Pusher = require('pusher');

const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://KimLe:kimle123@cluster0.c6nnpzt.mongodb.net/MessagingApp'

const pusher = new Pusher({
    appId: "1521621",
    key: "df2937fe32aa5605334e",
    secret: "c321a742c13d00a36a29",
    cluster: "ap1",
    useTLS: true
  });

app.use(express.json())
app.use(Cors)

mongoose.connect(connection_url, {
    useNewUrlParser: true,
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