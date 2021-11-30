/* function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 200, 200);

  
} */

//color [] piet = {#000000, #ff0000, #ffff00, #0000ff};
let piet = [];
function setup(){
  //createCanvas(500, 500);
  createCanvas(windowWidth, windowHeight);
  piet = [color('#d1b912'), color('#2f271f'), color('#d9d07f'), color('#5e2c09')];

  background(255);
  frameRate(2);
  //noLoop();
}

function draw(){
  background(255);
  translate(width/2, height/2);
  for(let a=0; a<360; a++){
    let minWidthHeight = width;
    if (height < width) {
      minWidthHeight = height;
    }
    let p1 = random(50, 100);
    let p2 = random(150, minWidthHeight/2);
    //pushMatrix();
    push();
    rotate(radians(a));
    strokeCap(CORNER);
    
    strokeWeight(4);
    //strokeWeight( random(5, 20) );
    //stroke(40);
    //stroke(random(255), random(255), random(255));
    //stroke( piet[ int(random(piet.length)) ] );
    //stroke( piet[ a/90 ] );
    stroke( piet[ a%4 ] );
    
    line(p1, 0, p2, 0);
    //popMatrix();
    pop();
  }
}

function keyPressed(){
  redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}