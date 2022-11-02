import React, {Component, useEffect} from "react";
import SnareSound from "../sounds/sounds/snare.mp3";
export default function Snare() {
    const playSound = () => {
        const audio = new Audio(SnareSound);
        if (!audio) return null;
        let list = document.getElementById('snare').classList;
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
            if (e.key.toLocaleLowerCase() === 'l') {
                playSound()
            }
        })
    });
    return(
        <div id='snare' data-key="76" className="key" style={{backgroundImage: 'url(images/snare.png)'}} onClick={playSound}>
            <kbd>L</kbd> <span class="sound">snare</span>
        </div>
    );
}