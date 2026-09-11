let sun = 200;
let sunspeed = 1;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 250);
//ZON//
  fill(200, 170, 0, 150);
  circle(sun, 100, 100);
  fill(255, 255, 0);
  strokeWeight(0);
  circle(sun, 100, 80);

  sun = sun + sunspeed;
  if(sun >= 850) {
    sun = -50;
  }
  ///////////
  //bergen//
  //////////
  fill(70);
  triangle(600, 550, 390, 200, 200, 550);
  fill(100);
  triangle(100, 550, 240, 300, 400, 550);
  triangle(900, 550, 600, 380, 400, 550);
  ///////
  //weg//
  ///////
  fill(20, 50, 20);
  rect(0, 510, 800, 100);
  fill(20, 100, 20);
  rect(0, 515, 800, 100);
  fill(70);
  rect(0, 525, 800, 100);
  fill(90);
  rect(0, 530, 800, 100);
  fill(255);
  rect(10, 555, 100, 10, 5);
  rect(190, 555, 100, 10, 5);
  rect(370, 555, 100, 10, 5);
  rect(550, 555, 100, 10, 5);
  
}