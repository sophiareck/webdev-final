var scale = [.125, .25, .5];
var rotation = ["-20deg", "-30deg", "-40deg", "0deg", "20deg", "30deg", "40deg"];

let horizontalEye = document.getElementById('eyes-horizontal');
let verticalEye = document.getElementById('eyes-vertical');

function createElement() {
  var randomScale = Math.floor(Math.random() * 3);
  var randomRotation = Math.floor(Math.random() * 5);
  var chosenScale = scale[randomScale];
  var chosenRotation = rotation[randomRotation];
  let newEye = document.createElement("img");
  newEye.src = "male eyes.jpg";
  newEye.style.transform = ("rotate(" + chosenRotation + ")");
  newEye.style.transform = ("scale(" + chosenScale + "," + chosenScale + ")");
  newEye.setAttribute("data-scroll", "");
  horizontalEye.appendChild(newEye);
  let newEye2 = document.createElement("img");
  newEye2.src = "male eyes.jpg";
  newEye2.style.transform = ("rotate(" + chosenRotation + ")");
  newEye2.style.transform = ("scale(" + chosenScale + "," + chosenScale + ")");
  newEye2.setAttribute("data-scroll", "");
  verticalEye.appendChild(newEye2);
}

for (var i = 0; i < 10; i++) {
  createElement();
}

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
