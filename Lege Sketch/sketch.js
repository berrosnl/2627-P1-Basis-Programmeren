// Variabelen
  // Dobbelsteen
  let dobbelsteen = 1


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  fill(0);
  rect(100, 100, 200, 200, 20);

    

// Getallen
  fill(255);
  strokeWeight(0);
  
  // 1
  if (dobbelsteen == 1){
  circle(200, 200, 50)}
  
  
  // 2
  if (dobbelsteen == 2){
  circle(150, 150, 50);
  circle(250, 250, 50)}

  // 3
  if (dobbelsteen == 3){
  circle(200, 200, 50);
  circle(150, 150, 50);
  circle(250, 250, 50)}

  // 4
  if (dobbelsteen == 4){
  circle(150, 150, 50);
  circle(250, 250, 50);
  circle(250, 150, 50);
  circle(150, 250, 50)}

  // 5
  if (dobbelsteen == 5){
  circle(200, 200, 50);
  circle(150, 150, 50);
  circle(250, 250, 50);
  circle(250, 150, 50);
  circle(150, 250, 50)}

  // 6
  if (dobbelsteen == 6){
  circle(150, 140, 50);
  circle(250, 260, 50);
  circle(250, 140, 50);
  circle(150, 260, 50);
  circle(250, 200, 50);
  circle(150, 200, 50)}
  
}

function keyPressed() {

  if (keyCode == (32)) {
    dobbelsteen = floor(random(1, 7));
  }

}