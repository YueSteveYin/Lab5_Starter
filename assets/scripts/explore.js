// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let button = document.querySelector("button");
  let smile = document.querySelector("img");
  let text = document.querySelector("textarea");
  let voices = document.querySelector("select");
  window.speechSynthesis.onvoiceschanged = function() {
    let voiceList = window.speechSynthesis.getVoices();
    for(let i = 0; i<voiceList.length; i++){
      var option = document.createElement("option");
      option.text = voiceList[i].name;
      option.value = i;
      voices.add(option);
    }
    button.addEventListener('click', (event) =>{
      smile.src = "assets/images/smiling-open.png";
      let speak = new SpeechSynthesisUtterance(text.value);
      speak.voice = voiceList[voices.value];
      speak.onend = function (Event) {
        smile.src = "assets/images/smiling.png";
      };
      speechSynthesis.speak(speak);
    });
  };

  // let voiceList = speechSynthesis.getVoices(); 
  // for(let i = 0; i<voiceList.length; i++){
  //   var option = document.createElement("option");
  //   option.text = voiceList[i].name;
  //   option.value = i;
  //   voices.add(option);
  //   console.log("i");
  // }
  /*
  var option = document.createElement("option");
  option.text = "test";
  voices.add(option);
  */
  
  // button.addEventListener('click', (Event) =>{
  //   smile.src = "assets/images/smiling-open.png";
  //   let speak = new SpeechSynthesisUtterance(text.value);
  //   speak.voice = voiceList[voices.value];
  //   speechSynthesis.speak(speak);
  // });
}