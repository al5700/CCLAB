let img;

function preload() {
  img = loadImage("assets/husky.jpg");
}

function setup(){
  createCanvas(1200,800);
  image(img, 0, 0, width, height);
}

function draw(){
  //background color
  loadPixels();
  for (let y=0;y<height;y++){
    for (let x=0;x<width;x++){
      let index = (x+y*width)*4;
      pixels[index+100]=51;
      pixels[index+200]=102;
      pixels[index+300]=153;
      pixels[index+400]=204;
      pixels[index+500]=255;
  }
}

  updatePixels();

  //buble husky
  for (let i = 0; i < 2000; i++) {
    let x = random(width);
    let y = random(height);
    let dia = random(5, 30);

    let clr = img.get(x, y);

    let r = red(clr) * 1.0;
    let g = green(clr) * 0.5;
    let b = blue(clr) * 0.7;
    fill(r, g, b);

    noStroke();
    circle(x, y, dia);
  }
}
