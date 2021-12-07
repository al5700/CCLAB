let hotpotRad = 100;

let foods = [];

//food list
//Prawn
let imgPrawnR;
let imgPrawnC;

//meat
let imgMeatR;
let imgmeatC;

//spageti
let imgSpagetiR;
let imgSpagetiC;

//chiken
let imgChikenR;
let imgChikenC;


function preload() {
    //prown
  imgPrawnR = loadImage("assets/prawn-r.png");
  imgPrawnC = loadImage("assets/prawn-c.png");

  //imgMeat
  imgMeatR = loadImage("assets/meat-r.png");
  imgMeatC = loadImage("assets/meat-c.png");

  //imSpageti
  imgSpagetiR = loadImage("assets/spageti-r.png");
  imgSpagetiC = loadImage("assets/spageti-c.png");

  //chiken
  imgChikenR = loadImage("assets/chiken-r.png");
  imgChikenC = loadImage("assets/chiken-c.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);

  //Hot pot cooking
  foods.push(new MoveableFood(windowWidth*1/8, 200, 150, imgPrawnR, imgPrawnC) );
  foods.push(new MoveableFood(windowWidth*3/8, 200, 150, imgMeatR, imgMeatC) );
  foods.push(new MoveableFood(windowWidth*5/8, 200, 150, imgSpagetiR, imgSpagetiC) );
  foods.push(new MoveableFood(windowWidth*7/8, 200, 150, imgChikenR, imgChikenC) );
}

function draw() {
  background(50);

  // replace with an image - don't forget imageMode(CENTER); !
  noFill();
  circle(width/2, height/2, hotpotRad*2);

  for (let i=0; i<foods.length; i++) {
    let f = foods[i];
    f.checkMouse();
    f.checkCooked();
    f.display();
  }
}


class MoveableFood {
  constructor(x, y, rad, imgR, imgC) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    // color
    this.r = 255;
    this.g = 255;
    this.b = 255;
    // images
    this.imgR = imgR;
    this.imgC = imgC;
    // cooked?
    this.isCooked = false;
  }
  checkCooked() {
    let distance = dist(this.x, this.y, width/2, height/2);
    if (distance < hotpotRad) {
      this.isCooked = true;
    }
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < this.rad) {
      // mouse is in the area
      this.r = 255;
      this.g = 255;
      this.b = 0;
      if (mouseIsPressed) {
        this.r = 255;
        this.b = 0;
        this.g = 0;
        this.x = mouseX;
        this.y = mouseY;
      }
    } else {
      // mouse is out of the area
      this.r = 255;
      this.g = 255;
      this.b = 255;
    }
  }
  display() {
    push();

    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.rad * 2, this.rad * 2); // ellipse takes a diameter!

    imageMode(CENTER);
    if (this.isCooked) {
      image(this.imgC, this.x, this.y, this.rad * 2, this.rad * 2);
    } else {
      image(this.imgR, this.x, this.y, this.rad * 2, this.rad * 2);
    }

    pop();
  }
}
