import React, {Component, useEffect} from "react";
import CrashSound from "../sounds/sounds/crash.mp3";
export default function Crash(){
    const playSound = () => {
        const audio = new Audio(CrashSound);
        if (!audio) return null;
        let list = document.getElementById('crash').classList;
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
            if (e.key.toLocaleLowerCase() === 'k') {
                playSound()
            }
        })
    });
    return(
        <div id='crash' data-key="75" className="key" style={{backgroundImage: 'url(images/crash.png)'}} onClick={playSound}>
            <kbd>K</kbd> <span class="sound">crash</span>
        </div>
    );
}