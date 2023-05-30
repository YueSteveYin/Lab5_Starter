// expose.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  //horn selection
  let jsConfetti = new JSConfetti();
  let hornSelection = document.getElementById("horn-select");
  let hornsound = document.querySelector("audio");
  let hornImage = document.querySelector("img");
  hornSelection.addEventListener("change", (Event) => {
    hornsound.src = "assets/audio/" + Event.target.value + ".mp3";
    hornImage.src = "assets/images/" + Event.target.value + ".svg";
    if(Event.target.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });
  //Sound playing
  let playPressed = document.querySelector("button");
  playPressed.addEventListener("click", (Event) => {
    hornsound.play();
  });
  //sound level
  let volumeControl = document.getElementById("volume");
  let volumeImage = document.querySelector("div#volume-controls img");
  volumeControl.addEventListener("input", (Event) => {
    console.log(volumeControl.value);
    if(volumeControl.value == 0){
      volumeImage.src = "/assets/icons/volume-level-0.svg";
      hornsound.volume = 0;
    }else if(volumeControl.value < 33){
      volumeImage.src = "/assets/icons/volume-level-1.svg";
      hornsound.volume = 0.33;
    }else if(volumeControl.value < 67){
      volumeImage.src = "/assets/icons/volume-level-2.svg";
      hornsound.volume = 0.66;
    }else if(volumeControl.value > 66){
      volumeImage.src = "/assets/icons/volume-level-3.svg";
      hornsound.volume = 1.0;
    }
  });
}