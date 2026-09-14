// Zon variabelen
let sun = 200;
let sunspeed = 1;

let sunsize1 = 100;

// Wolk variabelen
let cloud1 = 900;
let cloud1Speed = 1.5;

let cloud2 = 900;
let cloud2Speed = 1.05;

let cloud3 = 900;
let cloud3Speed = 1.2;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 250);
  
// ZON
  fill(240, 170, 0, 150);
  circle(sun, 100, sunsize1);
  sunsize1 = 100 + Math.sin(frameCount * 0.05) * 10
  
  
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
  
  // Wolken
    // Wolk 1
  fill(200)
  circle(890 - cloud1, 55, 50)
  circle(930 - cloud1, 55, 65)
  circle(970 - cloud1, 65, 50)

  fill(255)
  circle(890 - cloud1, 65, 50)
  circle(930 - cloud1, 65, 65)
  circle(970 - cloud1, 75, 50)
  cloud1 = (frameCount * cloud1Speed % 1000)

    // Wolk 2
  fill(200)
  circle(890 - cloud2, 185, 50)
  circle(930 - cloud2, 185, 65)
  circle(970 - cloud2, 195, 50)

  fill(255)
  circle(890 - cloud2, 195, 50)
  circle(930 - cloud2, 195, 65)
  circle(970 - cloud2, 205, 50)
  cloud2 = (frameCount * cloud2Speed % 1000)

    // Wolk 3
  fill(200)
  circle(890 - cloud2, 125, 50)
  circle(930 - cloud2, 125, 65)
  circle(970 - cloud2, 135, 50)

  fill(255)
  circle(890 - cloud2, 135, 50)
  circle(930 - cloud2, 135, 65)
  circle(970 - cloud2, 145, 50)
  cloud2 = (frameCount * cloud3Speed % 1000)
  
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