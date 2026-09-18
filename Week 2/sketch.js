// Variabelen //

  // Toeter
    let toeter

  // Stoplicht
    let stopLicht = 2; // 0 = Rood, 1 = Oranje, 2 = Groen


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

  // Boom variabelen
    let boom = 0;
    let boom2 = 0;

  // Auto variabelen
    let auto1 = 0;
    let auto1Speed = 12;

    let auto2 = 0;
    let auto2Speed = 15;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 250);
  
// Zon
  fill(240, 170, 0, 150);
  circle(sun, 100, sunsize1);
  sunsize1 = 100 + Math.sin(frameCount * 0.05) * 10;
  // Dit laat de zon pulseren/stralen
  
  
  fill(255, 255, 0);
  strokeWeight(0);
  circle(sun, 100, 80);

  sun = sun + sunspeed;
  if(sun >= 850) {
    sun = -50;
    // Reset de zon naar links van het scherm
  }
  
  // Bergen
  
  fill(70);
  triangle(600, 550, 390, 200, 200, 550);
  fill(100);
  triangle(100, 550, 240, 300, 400, 550);
  triangle(900, 550, 600, 380, 400, 550);
  
  
  // Wolken
    // Wolk 1
  fill(200);
  circle(890 - cloud1, 55, 50);
  circle(930 - cloud1, 55, 65);
  circle(970 - cloud1, 65, 50);

  fill(255);
  circle(890 - cloud1, 65, 50);
  circle(930 - cloud1, 65, 65);
  circle(970 - cloud1, 75, 50);
  cloud1 = (frameCount * cloud1Speed % 1000);
  // Dit laat de wolken bewegen van rechts naar links, hetzelfde geld voor de volgende 2 wolken.

    // Wolk 2
  fill(200);
  circle(890 - cloud2, 185, 50);
  circle(930 - cloud2, 185, 65);
  circle(970 - cloud2, 195, 50);

  fill(255);
  circle(890 - cloud2, 195, 50);
  circle(930 - cloud2, 195, 65);
  circle(970 - cloud2, 205, 50);
  cloud2 = (frameCount * cloud2Speed % 1000);

    // Wolk 3
  fill(200)
  circle(890 - cloud2, 125, 50);
  circle(930 - cloud2, 125, 65);
  circle(970 - cloud2, 135, 50);

  fill(255)
  circle(890 - cloud2, 135, 50);
  circle(930 - cloud2, 135, 65);
  circle(970 - cloud2, 145, 50);
  cloud2 = (frameCount * cloud3Speed % 1000);
  
  
  
// Weg
  
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


// Bomen
  // Boom 1
    fill(137, 81, 42);
    rect(50, 400, 20, 120);
  
    // Blaadjes
  boom = 50 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 102, 35);
    circle(boom, 400, 60);

  boom = 50 + Math .sin(frameCount * 0.1) * 8;
    fill(59, 177, 67);
    circle(boom, 390, 60);

  boom = 70 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 122, 35);
    circle(boom, 400, 60);

  boom = 70 + Math .sin(frameCount * 0.1) * 8;
    fill(36, 169, 87);
    circle(boom, 390, 60);
    // Dit laat de blaadjes van de boom bewegen, hetzelfde geld voor de volgende 4 bomen.

// Boom 2
    fill(137, 81, 42);
    rect(150, 400, 20, 120);
  
    // Blaadjes
  boom = 150 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 102, 35);
    circle(boom, 400, 60);

  boom = 150 + Math .sin(frameCount * 0.1) * 8;
    fill(59, 177, 67);
    circle(boom, 390, 60);

  boom = 170 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 122, 35);
    circle(boom, 400, 60);

  boom = 170 + Math .sin(frameCount * 0.1) * 8;
    fill(36, 169, 87);
    circle(boom, 390, 60);

// Boom 3
    fill(137, 81, 42);
    rect(280, 400, 20, 120);
  
    // Blaadjes
  boom = 280 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 102, 35);
    circle(boom, 400, 60);

  boom = 280 + Math .sin(frameCount * 0.1) * 8;
    fill(59, 177, 67);
    circle(boom, 390, 60);

  boom = 300 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 122, 35);
    circle(boom, 400, 60);

  boom = 300 + Math .sin(frameCount * 0.1) * 8;
    fill(36, 169, 87);
    circle(boom, 390, 60);

// Boom 4
    fill(137, 81, 42);
    rect(420, 400, 20, 120);
  
    // Blaadjes
  boom = 420 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 102, 35);
    circle(boom, 400, 60);

  boom = 420 + Math .sin(frameCount * 0.1) * 8;
    fill(42, 177, 67);
    circle(boom, 390, 60);

  boom = 440 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 122, 35);
    circle(boom, 400, 60);

  boom = 440 + Math .sin(frameCount * 0.1) * 8;
    fill(36, 169, 87);
    circle(boom, 390, 60);

// Stoplicht
  fill(50);
  rect(562.5, 400, 15, 120);
  rect(550, 340, 40, 110);

  if(stopLicht == 0) fill(225, 0, 0);
  else fill(70);
  circle(570, 360, 30);
  // Dit laat het stoplicht van kleur veranderen afhankelijk van de waarde van de variabele stopLicht.

  if(stopLicht == 1) fill(225, 155, 0);
  else fill(70);
  circle(570, 395, 30);
  // Hier gaat die dan op oranje als de waarde van stopLicht 1 is.

  if(stopLicht == 2) fill(0, 255, 0);
  else fill(70);
  circle(570, 430, 30);
  // Hier gaat die dan op groen als de waarde van stopLicht 2 is.


// Auto's
  
  // Stoplicht variabel voor auto's
  if (stopLicht == 0) {        // Rood
  auto1Speed = 0;
  auto2Speed = 0;
} else if (stopLicht == 1) {   // Oranje
  auto1Speed = 4;
  auto2Speed = 5;
} else {                       // Groen
  auto1Speed = 10;
  auto2Speed = 13;
  // Hier wordt de snelheid van de auto's aangepast afhankelijk van de waarde van stopLicht.
}
  
  // Auto 1
  fill(255, 0, 0);
  rect(-200 + auto1, 480, 100, 60, 10);
  rect(-120 + auto1, 510, 40, 30, 10);

  fill(0);
  circle(-180 + auto1, 540, 30);
  circle(-110 + auto1, 540, 30);

  auto1 += auto1Speed;
  if (auto1 > 1200) auto1 = 0;
  // Dit laat de auto's bewegen van links naar rechts, hetzelfde geld voor auto 2.

  // Auto 2
  fill(0, 0, 255);
  rect(-200 + auto2, 520, 100, 60, 10);
  rect(-120 + auto2, 550, 40, 30, 10);

  fill(0);
  circle(-180 + auto2, 580, 30);
  circle(-110 + auto2, 580, 30);

  auto2 += auto2Speed;
  if (auto2 > 1200) auto2 = 0;

  // Boom 5
  fill(137, 81, 42);
  rect(360, 480, 20, 120);

    // Blaadjes
  boom = 360 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 102, 35);
    circle(boom, 480, 60);

  boom = 360 + Math .sin(frameCount * 0.1) * 8;
    fill(42, 177, 67);
    circle(boom, 470, 60);

  boom = 380 + Math .sin(frameCount * 0.1) * 5;
    fill(11, 122, 35);
    circle(boom, 480, 60);

  boom = 380 + Math .sin(frameCount * 0.1) * 8;
    fill(36, 169, 87);
    circle(boom, 470, 60);
    // Dit is hetzelfde als de andere bomen, alleen staat die dichter bij de auto's.
}

function preload() {
  toeter = loadSound("toeter.mp3");
  // Hier wordt het geluid van de toeter ingeladen.
}

function keyPressed() {
  if (keyCode == 32){
    stopLicht = (stopLicht + 1) % 3;
    // Hier wordt de waarde van stopLicht aangepast als er op de spatiebalk wordt gedrukt.

  if (keyCode == ENTER){
    toeter.play();
    // Hier wordt het geluid van de toeter afgespeeld als er op de enter toets wordt gedrukt.
  }
  }
}