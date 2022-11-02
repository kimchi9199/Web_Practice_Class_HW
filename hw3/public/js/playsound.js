let isChosen;
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return null;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    setTimeout(function() {
        key.classList.remove("playing");
    }, 100);
}

function ClickToPlaySound(id) {
    if (isChosen == true) {
        setTimeout (function (){
            document.getElementById(id).play();
        }, 100);
    }

}
// window.addEventListener("click", ClickToPlaySound);
function PlayMethod() {
    let promt;
    let method = document.getElementById("playmethod").value;
    switch(method) {
        case "1":
            promt = "You chose 1";
            isChosen = false;
            window.addEventListener("keydown", playSound);
            break;
        case "2":
            promt = "You chose 2";
            isChosen = true;
            window.removeEventListener("keydown", playSound);
            break;
        default:
            promt = "Please choose 1 or 2";
    }
    document.getElementById("promt").innerHTML = promt;
}