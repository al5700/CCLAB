let dropzone;
let pict1;

function preload (){
  background = loadImage("assets/tablecloth.png");
  eat = loadImage("assets/Eat.gif");
  eat2 = loadImage("assets/Eat.gif");

}


//order cooked food
function setup() {
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile,unhighlight);
}

//background
function draw() {
  createCanvas(1508, 1169);
  image(background, 0, 0, width, height);
}

function gotFile(file){
    createP(file.name + "" +file.size);
}

//drop food to cook
function highlight(){
  dropzone.style('background-color','#ccc');
}

function unhighlight(){
  dropzone.style('background-color','#fff');
}

//make image movable
function allowDrop (ev){
  ev.preventDefault();
}

function drag (ev){
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop (ev){
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendchild(document.getElementById(data));
}
