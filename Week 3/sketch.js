// Variabelen

let spelAfgelopen = false;

let winnaar = 0;

let speler = 1;

// Vakjes
let rijLinksX = 90;
let rijMiddenX = 170;
let rijRechtsX = 250;

let rijBovenY = 90;
let rijMiddenY = 170;
let rijOnderY = 250;

let vakjeGrootte = 60;

let vakjeKleur = 150

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
  // dit is de font
  font = loadFont("Bold Frame.ttf")
}

function draw() {
  // als rood aan de beurt is wordt de achtergrond rood, en als het blauw is blauw
  if (speler == 1)
    background(200, 0, 0);
  else
    background(0, 0, 200)



  if (spelAfgelopen) {
    background(200)
    textSize(32);
    textFont("Bold Frame.ttf");

    if (winnaar == 1) {
      fill(255, 0, 0);
      text("RED WON!", 125, 50);
    }
    else if (winnaar == 2) {
      fill(0, 0, 255);
      text("BLUE WON!", 125, 50);
    }

  }
  else if (speler == 1) {

    textSize(32);
    textFont("Bold Frame.ttf");
    fill(0);
    text("REDS TURN", 120, 50);

  }
  else {

    textSize(32);
    textFont("Bold Frame.ttf");
    fill(0);
    text("BLUES TURN", 105, 50);

  }


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
    fill(vakjeKleur)
  }
  rect(rijLinksX, rijBovenY, vakjeGrootte, vakjeGrootte, 10); // 1


  if (vak2 == 1) {
    fill("red")
  }
  else if (vak2 == 2) {
    fill("blue")
  }
  else {
    fill(vakjeKleur)
  }
  rect(rijMiddenX, rijBovenY, vakjeGrootte, vakjeGrootte, 10); // 2


  if (vak3 == 1) {
    fill("red")
  }
  else if (vak3 == 2) {
    fill("blue")
  }
  else {
    fill(vakjeKleur)
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
    fill(vakjeKleur)
  }
  rect(rijLinksX, rijMiddenY, vakjeGrootte, vakjeGrootte, 10); // 4



  if (vak5 == 1) {
    fill("red")
  }
  else if (vak5 == 2) {
    fill("blue")
  }
  else {
    fill(vakjeKleur)
  }
  rect(rijMiddenX, rijMiddenY, vakjeGrootte, vakjeGrootte, 10); // 5



  if (vak6 == 1) {
    fill("red")
  }
  else if (vak6 == 2) {
    fill("blue")
  }
  else {
    fill(vakjeKleur)
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
    fill(vakjeKleur)
  }
  rect(rijLinksX, rijOnderY, vakjeGrootte, vakjeGrootte, 10); // 7



  if (vak8 == 1) {
    fill("red")
  }
  else if (vak8 == 2) {
    fill("blue")
  }
  else {
    fill(vakjeKleur)
  }
  rect(rijMiddenX, rijOnderY, vakjeGrootte, vakjeGrootte, 10); // 8



  if (vak9 == 1) {
    fill("red")
  }
  else if (vak9 == 2) {
    fill("blue")
  }
  else {
    fill(vakjeKleur)
  }
  rect(rijRechtsX, rijOnderY, vakjeGrootte, vakjeGrootte, 10); // 9  
}

function mousePressed() {
  if (mouseButton == "left") {
    if (spelAfgelopen) {
      return;
    }

    // Rij 1 
    // vakje 1, linksboven
    if (mouseX > rijLinksX && mouseX < rijLinksX + vakjeGrootte &&
      mouseY > rijBovenY && mouseY < vakjeGrootte + rijBovenY) {

      if (vak1 == 0) {

        vak1 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }


    // vakje 2, middenboven
    if (mouseX > rijMiddenX && mouseX < rijMiddenX + vakjeGrootte &&
      mouseY > rijBovenY && mouseY < vakjeGrootte + rijBovenY) {

      if (vak2 == 0) {

        vak2 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }

    // Vakje 3, rechtsboven
    if (mouseX > rijRechtsX && mouseX < rijRechtsX + vakjeGrootte &&
      mouseY > rijBovenY && mouseY < vakjeGrootte + rijBovenY) {

      if (vak3 == 0) {

        vak3 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }

    // Rij 2 

    // vakje 4
    if (mouseX > rijLinksX && mouseX < rijLinksX + vakjeGrootte &&
      mouseY > rijMiddenY && mouseY < vakjeGrootte + rijMiddenY) {

      if (vak4 == 0) {

        vak4 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }


    // vakje 5
    if (mouseX > rijMiddenX && mouseX < rijMiddenX + vakjeGrootte &&
      mouseY > rijMiddenY && mouseY < vakjeGrootte + rijMiddenY) {

      if (vak5 == 0) {

        vak5 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }

    // Vakje 6
    if (mouseX > rijRechtsX && mouseX < rijRechtsX + vakjeGrootte &&
      mouseY > rijMiddenY && mouseY < vakjeGrootte + rijMiddenY) {

      if (vak6 == 0) {

        vak6 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }

    // Rij 3

    // vakje 7
    if (mouseX > rijLinksX && mouseX < rijLinksX + vakjeGrootte &&
      mouseY > rijOnderY && mouseY < vakjeGrootte + rijOnderY) {

      if (vak7 == 0) {

        vak7 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }


    // vakje 8
    if (mouseX > rijMiddenX && mouseX < rijMiddenX + vakjeGrootte &&
      mouseY > rijOnderY && mouseY < vakjeGrootte + rijOnderY) {

      if (vak8 == 0) {

        vak8 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }

    // Vakje 9
    if (mouseX > rijRechtsX && mouseX < rijRechtsX + vakjeGrootte &&
      mouseY > rijOnderY && mouseY < vakjeGrootte + rijOnderY) {

      if (vak9 == 0) {

        vak9 = speler;

        speler = 3 - speler;

        controleerWinnaar();
      }
    }
  }


  function controleerWinnaar() {

    if (spelAfgelopen) {
      return;
    }

    // Rij 1
    if (vak1 != 0 && vak1 == vak2 && vak2 == vak3) {
      winnaar = vak1;
      spelAfgelopen = true;
    }

    // Rij 2
    if (vak4 != 0 && vak4 == vak5 && vak5 == vak6) {
      winnaar = vak4;
      spelAfgelopen = true;
    }

    // Rij 3
    if (vak7 != 0 && vak7 == vak8 && vak8 == vak9) {
      winnaar = vak7;
      spelAfgelopen = true;
    }

    // Kolom 1
    if (vak1 != 0 && vak1 == vak4 && vak4 == vak7) {
      winnaar = vak1;
      spelAfgelopen = true;
    }

    // Kolom 2
    if (vak2 != 0 && vak2 == vak5 && vak5 == vak8) {
      winnaar = vak2;
      spelAfgelopen = true;
    }

    // Kolom 3
    if (vak3 != 0 && vak3 == vak6 && vak6 == vak9) {
      winnaar = vak3;
      spelAfgelopen = true;
    }

    // Diagonaal 1
    if (vak1 != 0 && vak1 == vak5 && vak5 == vak9) {
      winnaar = vak1;
      spelAfgelopen = true;
    }

    // Diagonaal 2
    if (vak3 != 0 && vak3 == vak5 && vak5 == vak7) {
      winnaar = vak3;
      spelAfgelopen = true;
    }
  }
}