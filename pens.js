class CircleBrush {
  
  constructor (x, y, x1, y1, colorInput, weight) {
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
    this.colorInput = colorInput;
    this.weight = weight;
  }
  
  display() {
    stroke(this.colorInput);
    strokeWeight(this.weight);
    line(this.x, this.y, this.x1, this.y1);
  }
}

let colorInput;
let bgColorInput;
let defaultColor = "#000000";
let defaultBG = '#d1d1d1'

window.addEventListener("load", startup, false);

function startup() {
  colorInput = document.querySelector("#colorInput");
  colorInput.value = defaultColor;
  colorInput.select();
  
  bgColorInput = document.querySelector("#bgColor");
  bgColorInput.value = defaultBG;
  bgColorInput.select();
}


let colorInput;
let bgColorInput;
let defaultColor = "#000000";
let defaultBG = '#d1d1d1'

window.addEventListener("load", startup, false);

function startup() {
  colorInput = document.querySelector("#colorInput");
  colorInput.value = defaultColor;
  colorInput.select();
  
  bgColorInput = document.querySelector("#bgColor");
  bgColorInput.value = defaultBG;
  bgColorInput.select();
}


let colorInput;
let bgColorInput;
let defaultColor = "#000000";
let defaultBG = '#d1d1d1'

window.addEventListener("load", startup, false);

function startup() {
  colorInput = document.querySelector("#colorInput");
  colorInput.value = defaultColor;
  colorInput.select();
  
  bgColorInput = document.querySelector("#bgColor");
  bgColorInput.value = defaultBG;
  bgColorInput.select();
}
let currentBrush;
let currentBrushArray = [];

let tool;
let bgColor;
let weight;
let toggle;
let slider;
let body;

let circleBrushButton;
let squareBrushButton;
let penButton;
let eraserButton;
let clearButton;
let saveButton;



function setup() {
  createCanvas(window.innerWidth - 300, window.innerHeight - 300);
  
  body = select('body');
  weight = select('#weight');
  saveButton = select('#download');
  bgColor = select('#bgColor');
  toggle = select('.toggle');
  slider = select('.slider');

