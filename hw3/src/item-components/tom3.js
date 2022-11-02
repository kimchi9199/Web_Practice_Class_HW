import React, {useEffect, Component} from "react";
import Tom3Sound from '../sounds/sounds/tom-3.mp3'


export default function Tom3 (){
    const playSound = () => {
        const audio = new Audio(Tom3Sound);
        if (!audio) return null;
        let list = document.getElementById('tom3').classList;
        list.add('playing')
        audio.currentTime = 0;
        audio.play();
        setTimeout(function() {
            list.remove("playing");
        }, 100);

    };
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            console.log(e.key.toLocaleLowerCase())
            if (e.key.toLocaleLowerCase() === 's') {
                playSound()
            }
        })
    });
    return(
        <div id='tom3' data-key="83" className="key" style={{backgroundImage: 'url(images/tom3.png)'}} onClick={playSound}>
            <kbd>S</kbd> <span class="sound">tom-3</span>
        </div>
    );
}