import React, {Component, useEffect} from "react";
import KickBassSound from "../sounds/sounds/kick-bass.mp3";
export default function KickBass() {
    const playSound = () => {
        const audio = new Audio(KickBassSound);
        if (!audio) return null;
        let list = document.getElementById('kick-bass').classList;
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
            if (e.key.toLocaleLowerCase() === 'j') {
                playSound()
            }
        })
    });
    return(
        <div id='kick-bass' data-key="74" className="key" style={{backgroundImage: 'url(images/kick.png)'}} onClick={playSound}>
            <kbd>J</kbd> <span class="sound">kick-bass</span>
        </div>
    );
}