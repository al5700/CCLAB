let sound;
let mic;

function preload(){
  sound = loadSound("assets/sound.mp3");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate(20);
  background(0,0,50);

  mic = new p5.AudioIn();
}

function draw(){
  if(key == "ArrowUp"){
    x=random(width);
    y=random(height);
    r=random(5,200);
    stroke(r,0, 225);
    strokeWeight(2);
    noFill();
    ellipse(x,y, random(55,70),random(55,70));
  }
  if(key == "ArrowDown"){
    x=random(width);
    y=random(height);
    g=random(130,250);
    stroke(g,255, 0);
    noFill();
    ellipse(x,y, random(20,80),random(20,80));
  }
  if(keyCode==32){
    x=random(width);
    y=random(height);
    background(0,0,50)
  }
}

function mousePressed(){
  if(sound.isPlaying() == false){
    sound.play();
  }else{
    sound.pause();
  }
}
