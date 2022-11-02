import React, {useEffect, Component} from "react";
import Tom2Sound from '../sounds/sounds/tom-2.mp3'
export default function Tom2() {
    const playSound = () => {
        const audio = new Audio(Tom2Sound);
        if (!audio) return null;
        let list = document.getElementById('tom2').classList;
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
            if (e.key.toLocaleLowerCase() === 'a') {
                playSound()
            }
        })
    });
    return(
        <div id='tom2' data-key="65" className="key" style={{backgroundImage: 'url(images/tom2.png)'}} onClick={playSound}>
            <kbd>A</kbd> <span class="sound">tom-2</span>
        </div>
    );
}