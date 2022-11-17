import React, {useState, useEffect} from 'react'
import DatingCards from 'react-tinder-card'
import './style/DatingCard.css'
import Axios from 'axios'

const DatingCard=()=>  {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData() {
             const req = await Axios.get("http://localhost:8001/dating/card")
             setPeople(req.data)
        }
        fetchData()
    }, [])
    const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
  return (
    <div className="datingCards">
        <div className="datingCards__container">
            {people.map((person) => (
                <DatingCards
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div style={{backgroundImage: `url(${person.imgUrl})`}} className="person_img">
                        <h3>{person.name}</h3>
                    </div>
                </DatingCards>
            ))}
        </div>
    </div>
  )
}

export default DatingCard