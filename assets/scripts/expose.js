// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //horn selection
  let hornSelection = document.getElementById("horn-select");
  let hornSound = document.getElementsByClassName("hidden");
  let hornImage = document.querySelector("img");
  hornSelection.addEventListener("change", (Event) => {
    hornSound.src = "/assets/audio/ ${Event.target.value} .mp3";
    hornImage.src = "/assets/images/ ${Event.target.value} .svg";
  });
  //Sound playing
  let playPressed = document.querySelector("button");
  let sound = document.getElementsByClassName("hidden");
  playPressed.addEventListener("click", (Event) => {
    sound.play();
  });
  //sound level
  let volumeControl = document.getElementById("volume");
  let volumeImage = document.querySelector("div#volume-controls img");
  volumeControl.addEventListener("input", (Event) => {
    if(Event.value == 0){
      volumeImage.src = "/assets/icon/volume-level-0.svg";
      sound.volume = 0.25;
    }else if(Event.value < 33){
      volumeImage.src = "/assets/icon/volume-level-1.svg";
      sound.volume = 0.5;
    }else if(Event.value < 67){
      volumeImage.src = "/assets/icon/volume-level-2.svg";
      sound.volume = 0.75;
    }else{
      volumeImage.src = "/assets/icon/volume-level-3.svg";
      sound.volume = 1.0;
    }
  });
}