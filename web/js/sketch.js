// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let r = 0;
let g = 0;
let b = 0;
let x;
let y;
let d = 0;
let wave_text = 10;
let sc = 0;
let leftSound, rightSound, poke, pluck, twirl, D1, D2, D3, D4;
let drums = [];
let gesture;

let intended_gesture = 0;

const media = document.getElementById('video');
const result = document.getElementById('content');
// media.removeAttribute('controls');
result.innerHTML = "";

media.ontimeupdate = function(){myAlgo()};

function myAlgo(){
    if(Math.round(media.currentTime) == 8.0){
      media.pause();
      intended_gesture = 1;
      result.innerHTML = "Draw the same line"; 
    }

    if(Math.round(media.currentTime) == 17.0){
      media.pause();
      intended_gesture = 2;
      result.innerHTML = "Draw the same line";
    }

    if(Math.round(media.currentTime) == 23.0){
      media.pause();
      intended_gesture = 3;
      result.innerHTML = "Draw the same line";
    }

    if(Math.round(media.currentTime) == 36.0){
      media.pause();
      intended_gesture = 4;
      result.innerHTML = "Draw the same curve";
    }

    if(Math.round(media.currentTime) == 39.0 ){
      media.pause();
      intended_gesture = 4;
      result.innerHTML = "Draw the same curve";
    }

    if(Math.round(media.currentTime) == 43.0){
      media.pause();
      intended_gesture = 3;
      result.innerHTML = "Draw the same line";
    }

    if(Math.round(media.currentTime) == 46.0){
      media.pause();
      intended_gesture = 5;
      result.innerHTML = "Draw the same line";
    }

    if(Math.round(media.currentTime) == 49.0){
      media.pause();
      intended_gesture = 3;
      result.innerHTML = "Draw the same line";
    }
};


function preload() {
  D1 = loadSound('./sounds/D1.wav');
  D2 = loadSound('./sounds/D2.wav');
  D3 = loadSound('./sounds/D3.wav');
  D4 = loadSound('./sounds/D4.wav');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");
  drums = [D1,D2,D3,D4];
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function skip_gesture(){
  media.currentTime = Math.round(media.currentTime) + 1.0;
  result.innerHTML = "Great work! Keep going.."
  media.play();
}


function onInferenceSketch(i) {
  userStartAudio();
  switch (i) {
    case 0:
      if(intended_gesture == 1 && Math.round(media.currentTime) == 8.0){
        skip_gesture();
      }
      
      break;
    case 1:
      if(intended_gesture == 2 && Math.round(media.currentTime) == 17.0){
        skip_gesture();
      }

      break;
    case 2:
      if(intended_gesture == 3 && (Math.round(media.currentTime) == 23.0 || Math.round(media.currentTime) == 43.0 || Math.round(media.currentTime) == 49.0 )){
        skip_gesture();
      }

      break;
    case 3:
      if(intended_gesture == 4 && (Math.round(media.currentTime) == 36.0 || Math.round(media.currentTime) == 39.0)){
        skip_gesture();
      }

      break;
    case 4:
      if(intended_gesture == 5 && Math.round(media.currentTime) == 46.0){
        skip_gesture();
      }

      break;  
    default:
    // code block
  }
}




//Try application with keyboard
function keyPressed() {
  //RIGHT
  if (keyCode == '81') {
    skip_gesture();
  }
  
}

/************************************************************************
// SCRIPT FOR DISPLAY
/************************************************************************/

if(!!navigator.bluetooth){
  document.body.classList.add('not-supported');
}

/************************************************************************
// SCRIPT FOR BUTTONS
/************************************************************************/

// // GO TO PLAY --- ONLY FOR TESTING 
// document.getElementById("go_to_play").addEventListener("click", function(){
//   document.querySelector('.play').scrollIntoView({
//       behavior: "smooth",
//       });
//     }, 100);

// GO TO SKETCH BUTTON
document.getElementById("go_to_sketch").addEventListener("click", function(){
  media.play();
  document.querySelector('#sketch-holder').scrollIntoView({
      behavior: "smooth",
      });
    }, 100);


window.tinyMlExperimentBleInterface.createConnectButton('#connectButtonContainer', {
  model: "Edumodel/model.tflite",
  numClasses: 5,
  threshold: 0.2,
  numSamples: 30,
  captureDelay: 30,
  useMagnetometer: false,
  onConnect() {
    console.log('The BLE is connected!');
  },

  onTransferProgress(progress) {
    console.log(`Loaded ${Math.round(progress * 100)}%)`);
    var bar = document.getElementById("myBar");
    document.getElementById("myProgress").style.visibility = 'visible';
    bar.style.width = Math.round(progress * 100) + "%";
    document.getElementById("myBar").innerHTML = `${Math.round(progress * 100)}%`;  
  },

  onTransferCompleted() {
   
    setTimeout(() => {

      document.querySelector('.play').scrollIntoView({
      behavior: "smooth",
      });
    }, 100); 
   
  },

  onDisconnect() {
    console.log('The BLE is disconnected!');
  },

  onInference(data) {
    onInferenceSketch(data.index);
  }
});
