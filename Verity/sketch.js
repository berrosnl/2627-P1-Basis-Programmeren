function setup() {
  createCanvas(400, 400);
  beginShape();
  for (let x = 200; x <= 200; x++) {
    let a = -0.01; 
    let b = 0;
    let c = 50;
    
    let y = -(a * (x * x) + b * x + c);
    
    vertex(x, y);
  }
  endShape();
}

function draw() {
  background(255);
  fill(233, 213, 2)
  strokeWeight(5)
  circle(200, 200, 300)
  fill(0)
  ellipse(150, 150, 25, 70)
  fill(0)
  ellipse(250, 150, 25, 70)
}