import React, {useEffect, Component} from "react";
import Tom4Sound from '../sounds/sounds/tom-4.mp3'

export default function Tom4() {
    const playSound = () => {
        const audio = new Audio(Tom4Sound);
        if (!audio) return null;
        let list = document.getElementById('tom4').classList;
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
            if (e.key.toLocaleLowerCase() === 'd') {
                playSound()
            }
        })
    });
    return(
        <div id='tom4' data-key="68" className="key" style={{backgroundImage: 'url(images/tom4.png)'}} onClick={playSound}>
            <kbd>D</kbd> <span class="sound">tom-4</span>
        </div>
    );
}