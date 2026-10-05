function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  tekenHuis(400, 450)
}

function tekenHuis(x, y, grootte) {
  fill(255)
  rect(150, 150, 100, 100)
  fill(255, 0, 0)
  triangle(150, 150, 200, 100, 250, 150)
  fill(150, 75, 0)
  rect(205, 200, 30, 50)
  fill(173, 216, 230)
  rect(155, 205, 45, 20)
  fill(255, 255, 0)
  circle(210, 225, 10, 10)
  
}