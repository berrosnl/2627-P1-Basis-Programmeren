// Variabelen

let speler = 1;

// Vakjes
let rijLinksX = 90;
let rijMiddenX = 170;
let rijRechtsX = 250;

let rijBovenY = 90;
let rijMiddenY = 170;
let rijOnderY = 250;

let vakjeGrootte = 60;

let vak1 = 0;
let vak2 = 0;
let vak3 = 0;
let vak4 = 0;
let vak5 = 0;
let vak6 = 0;
let vak7 = 0;
let vak8 = 0;
let vak9 = 0;

function setup() {
  createCanvas(400, 400);

  font = loadFont("Bold Frame.ttf")
}

function draw() {
  if (speler == 1)
    background(255, 0, 0);
  else
    background(0, 0, 255)

if (speler == 1)
  textSize(32);
  textFont("Bold Frame.ttf")
  fill(0)
  text('REDS TURN', 125, 50)


  fill(0);
  rect(80, 80, 240, 240, 10);

  fill(200);
  strokeWeight(0);

  // Rij 1

  if (vak1 == 1) {
    fill("red")
  }
  else if (vak1 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijLinksX, rijBovenY, vakjeGrootte, vakjeGrootte, 10); // 1


  if (vak2 == 1) {
    fill("red")
  }
  else if (vak2 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijMiddenX, rijBovenY, vakjeGrootte, vakjeGrootte, 10); // 2


  if (vak3 == 1) {
    fill("red")
  }
  else if (vak3 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijRechtsX, rijBovenY, vakjeGrootte, vakjeGrootte, 10); // 3



  // Rij 2

  if (vak4 == 1) {
    fill("red")
  }
  else if (vak4 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijLinksX, rijMiddenY, vakjeGrootte, vakjeGrootte, 10); // 4



  if (vak5 == 1) {
    fill("red")
  }
  else if (vak5 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijMiddenX, rijMiddenY, vakjeGrootte, vakjeGrootte, 10); // 5



  if (vak6 == 1) {
    fill("red")
  }
  else if (vak6 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijRechtsX, rijMiddenY, vakjeGrootte, vakjeGrootte, 10); // 6



  // Rij 3



  if (vak7 == 1) {
    fill("red")
  }
  else if (vak7 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijLinksX, rijOnderY, vakjeGrootte, vakjeGrootte, 10); // 7



  if (vak8 == 1) {
    fill("red")
  }
  else if (vak8 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijMiddenX, rijOnderY, vakjeGrootte, vakjeGrootte, 10); // 8



  if (vak9 == 1) {
    fill("red")
  }
  else if (vak9 == 2) {
    fill("blue")
  }
  else {
    fill(200)
  }
  rect(rijRechtsX, rijOnderY, vakjeGrootte, vakjeGrootte, 10); // 9  
}

function mousePressed() {
  if (mouseButton == "left") {


    // Rij 1 
    // vakje 1, linksboven
    if (mouseX > rijLinksX && mouseX < rijLinksX + vakjeGrootte &&
      mouseY > rijBovenY && mouseY < vakjeGrootte + rijBovenY) {

      if (vak1 == 0) {

        vak1 = speler;

        speler = 3 - speler;
      }
    }


    // vakje 2, middenboven
    if (mouseX > rijMiddenX && mouseX < rijMiddenX + vakjeGrootte &&
      mouseY > rijBovenY && mouseY < vakjeGrootte + rijBovenY) {

      if (vak2 == 0) {

        vak2 = speler;

        speler = 3 - speler;
      }
    }

    // Vakje 3, rechtsboven
    if (mouseX > rijRechtsX && mouseX < rijRechtsX + vakjeGrootte &&
      mouseY > rijBovenY && mouseY < vakjeGrootte + rijBovenY) {

      if (vak3 == 0) {

        vak3 = speler;

        speler = 3 - speler;
      }
    }

    // Rij 2 

    // vakje 4
    if (mouseX > rijLinksX && mouseX < rijLinksX + vakjeGrootte &&
      mouseY > rijMiddenY && mouseY < vakjeGrootte + rijMiddenY) {

      if (vak4 == 0) {

        vak4 = speler;

        speler = 3 - speler;
      }
    }


    // vakje 5
    if (mouseX > rijMiddenX && mouseX < rijMiddenX + vakjeGrootte &&
      mouseY > rijMiddenY && mouseY < vakjeGrootte + rijMiddenY) {

      if (vak5 == 0) {

        vak5 = speler;

        speler = 3 - speler;
      }
    }

    // Vakje 6
    if (mouseX > rijRechtsX && mouseX < rijRechtsX + vakjeGrootte &&
      mouseY > rijMiddenY && mouseY < vakjeGrootte + rijMiddenY) {

      if (vak6 == 0) {

        vak6 = speler;

        speler = 3 - speler;
      }
    }

    // Rij 3

    // vakje 7
    if (mouseX > rijLinksX && mouseX < rijLinksX + vakjeGrootte &&
      mouseY > rijOnderY && mouseY < vakjeGrootte + rijOnderY) {

      if (vak7 == 0) {

        vak7 = speler;

        speler = 3 - speler;
      }
    }


    // vakje 8
    if (mouseX > rijMiddenX && mouseX < rijMiddenX + vakjeGrootte &&
      mouseY > rijOnderY && mouseY < vakjeGrootte + rijOnderY) {

      if (vak8 == 0) {

        vak8 = speler;

        speler = 3 - speler;
      }
    }

    // Vakje 9
    if (mouseX > rijRechtsX && mouseX < rijRechtsX + vakjeGrootte &&
      mouseY > rijOnderY && mouseY < vakjeGrootte + rijOnderY) {

      if (vak9 == 0) {

        vak9 = speler;

        speler = 3 - speler;
      }
    }
  }
}