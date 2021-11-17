console.log("Loaded!");

let sliderR, sliderG, sliderB;

function setup(){
  let canvas= createCanvas(480, 500);
  canvas.id("p5-canvas");
  background(100);
  sliderR = document.getElementById('slider-r');
  sliderG = document.getElementById('slider-g');
  sliderB = document.getElementById('slider-b');
}

function draw(){

  let r = sliderR.value;
  let g = sliderG.value;
  let b = sliderB.value;

  fill(r,g,b);
  rect(20,20,100,100);
  //background(r,g,b);
}

function drawCircle(){
  let dia = random(10,150);
  ellipse(random(width), random(height), dia);
}

function drawSquare(){
  let size = random(10,150);
  square(random(width), random(height), size);
}

function cleanCanvas(){
  let canvas= createCanvas(480, 500);
  canvas.id("p5-canvas");
  background(100);
}
