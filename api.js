
const videoSrc = document.querySelector("#video-source");
const videoTag = document.querySelector("#video-tag");
const inputTag = document.querySelector("#input-tag");

inputTag.addEventListener('change',  readVideo)

function readVideo(event) {
  console.log(event.target.files)
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      console.log('loaded')
      videoSrc.src = e.target.result
      videoTag.load()
    }.bind(this)

    reader.readAsDataURL(event.target.files[0]);
  }
}

$(document).ready(function() {
  var percent = 0;

  timerId = setInterval(function() {
      //incremento de la barra de progreso de 10 en 10 
      percent += 10;
      $('.progress-bar').css('width', percent+'%');
      $('.progress-bar').attr('aria-valuenow', percent);
      $('.progress-bar').text(percent+'%');

      //complete
      if (percent == 100) {
          clearInterval(timerId);
          $('.information').show();
      }

  }, 1000);
});

var video = document.querySelector("#video-tag");
function playPause() { 
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
}
function recargar() { 
   video.load(); 
}
function maximizar() { 
    video.width = 1300; 
}
function minimizar() { 
    video.width = 250; 
} 
function normal() { 
    video.width = 700; 
} 
function subirVolumen() {
    video.volume += 0.1;
}

function bajarVolumen(){
   video.volume -= 0.1;
}
