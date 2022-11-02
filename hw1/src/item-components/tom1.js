import React, {useEffect, Component} from "react";
import Tom1Sound from '../sounds/sounds/tom-1.mp3'
export default function Tom1() {
     const playSound = () => {
        const audio = new Audio(Tom1Sound);
        const key = 87;
        if (!audio) return null;
        let list = document.getElementById('tom1').classList;
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
            if (e.key.toLocaleLowerCase() === 'w') {
                playSound()
            }
        })
    });

    return(
        <div id='tom1' data-key="87" className="key" style={{backgroundImage: 'url(images/tom1.png)'}}
             onClick={playSound}>
            <kbd>W</kbd> <span className="sound">tom-1</span>
        </div>
    );

}