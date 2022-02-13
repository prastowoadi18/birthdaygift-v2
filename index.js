function play() {
    var audio = document.getElementById("audio");
    audio.play();
    audio.loop = true;
}

function stop() {
    var audio = document.getElementById("audio");
    audio.pause();
}
