const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webcamElement, 'user', canvasElement);

function changecolor() {
  var dd1 = document.getElementById("fl");
  dd1.classList.toggle("fclass");
  var dd2 = document.getElementById("len");
  dd2.classList.toggle("dclass");
}

function myFunction() {
  var element = document.getElementById("gallery");
  element.classList.toggle("gal");
  element.style.opacity = 1; 
}

function hide() {
  var el = document.getElementById("canvas");
  el.style.opacity = 0; 
  var el2 = document.getElementById("webcam");
  el2.style.opacity = 0;
}

function disp() {
    var x =  document.getElementById("galbutton");
    var el = document.getElementById("webcam");
  el.style.opacity = 1; 
}

function disp2() {
  var x = document.getElementById("galbutton");
      var el = document.getElementById("canvas");
  
  if(x.style.backgroundColor === "red") {
  el.style.opacity = 1;
    el.style.display = "block";
  }
  else {
    var re = document.getElementById("req");
      el.style.opacity = 0;
    el.style.display = "none";
  re.style.opacity = 1; 
  }
} 

function error() {
  var re = document.getElementById("req");
  re.style.opacity = 1;
}

function on() {
  var x = document.getElementById("galbutton");
  x.style.backgroundColor = "red";
  
        var re = document.getElementById("req");
  re.style.opacity = 0;
  
  var y = document.getElementById("snap");
  y.style.backgroundColor = "white";
  
  var z = document.getElementById("light");
  z.style.backgroundColor = "#53ff1a";  
}

function off() { 
  var x = document.getElementById("galbutton");
  x.style.backgroundColor = "white";
  
  var y = document.getElementById("snap");
  y.style.backgroundColor = "red";
  
  var z = document.getElementById("light");
  z.style.backgroundColor = "gray";
}  

//*************************
//   var audio = document.getElementById("camera");
// function click() {
//   // var audio = document.getElementById("camera");
//   // var audio = new Audio('C:\Users\piyush mohan\Downloads\camera.mp3'); 
//   audio.play();
// } 
//**************************

function help() {
  var x = document.getElementById("message");
  x.style.opacity = 1;
}

//*************************
function drop() {
    var dd1 = document.getElementById("message");
  dd1.classList.toggle("mes");
  // var dd2 = document.getElementById("down").value;
  // dd2 = "x";
}

function confirm() {
  var x = document.getElementById("confirm");
//  if(x.style.opacity == 0) { 
    x.style.opacity = 1;
} 

function chide() {
  var x = document.getElementById("confirm");
x.classList.toggle("conhide");
}
//*************************


var canvas = document.getElementById("canvas");

function download_image() {
  var image = canvas.toDataURL("image/jpeg");    
  var tmpLink = document.createElement('a');
  tmpLink.download = "image-download.png"; 
  tmpLink.href = image;   
  document.body.appendChild( tmpLink );  
  tmpLink.click();
  document.body.removeChild( tmpLink );
} 