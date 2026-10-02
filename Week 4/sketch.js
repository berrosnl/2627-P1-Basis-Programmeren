// Arrays
let vormen = [];
let kleuren = [];

// Vormen
let aantalVormen;



function setup() {
  createCanvas(800, 600);

  genereerKunst();
}

function draw() {
  background(28, 3, 51);


  // Alle vormen maken
  for (let i = 0; i < vormen.length; i++) {

    let vorm = vormen[i];

    // Beweging
    vorm.x += vorm.snelheidX;
    vorm.y += vorm.snelheidY;

    // Als een vorm buiten beeld gaat verschijnt hij aan de andere kant
    if (vorm.x > width + vorm.grootte) {
      vorm.x = -vorm.grootte;
    }

    if (vorm.x < -vorm.grootte) {
      vorm.x = width + vorm.grootte;
    }

    if (vorm.y > height + vorm.grootte) {
      vorm.y = -vorm.grootte;
    }

    if (vorm.y < -vorm.grootte) {
      vorm.y = height + vorm.grootte;
    }

    // Kleur van de vorm
    fill(vorm.kleur);
    stroke(10);
    strokeWeight(4);

    // Verschillende soorten vormen
    if (vorm.type === "cirkel") {
      ellipse(vorm.x, vorm.y, vorm.grootte, vorm.grootte);

    } else if (vorm.type === "vierkant") {
      push();
      translate(vorm.x, vorm.y);
      rotate(vorm.hoek);
      rectMode(CENTER);
      rect(0, 0, vorm.grootte, vorm.grootte);
      pop();

    } else if (vorm.type === "driehoek") {
      push();
      translate(vorm.x, vorm.y);
      rotate(vorm.hoek);

      triangle(
        -vorm.grootte / 2,
        vorm.grootte / 2,
        0,
        -vorm.grootte / 2,
        vorm.grootte / 2,
        vorm.grootte / 2
      );

      pop();
    }
  }
}



function genereerKunst() {

  // Oude vormen verwijderen
  vormen = [];

  // Willekeurig aantal vormen
  aantalVormen = int(random(12, 30));

  // Kleuren voor de kunst
  kleuren = [
    color(255, 0, 150),
    color(0, 220, 255),
    color(255, 120, 0),
    color(100, 50, 255),
    color(150, 255, 50),
    color(255, 50, 50),
    color(255, 220, 0)
  ];

  // Nieuwe vormen maken
  for (let i = 0; i < aantalVormen; i++) {

    let nieuweVorm = {

      // Willekeurige positie
      x: random(width),
      y: random(height),

      // Willekeurige grootte
      grootte: random(30, 130),

      // Willekeurige snelheid
      snelheidX: random(-1.5, 1.5),
      snelheidY: random(-1.5, 1.5),

      // Willekeurige rotatie
      hoek: random(TWO_PI),

      // Willekeurige kleur
      kleur: random(kleuren),

      // Willekeurige vorm
      type: random(["cirkel", "vierkant", "driehoek"])
    };

    // Vorm toevoegen aan de array
    vormen.push(nieuweVorm);
  }
}



function keyPressed() {

  // Backspace randomized het
  if (keyCode === BACKSPACE) {
    genereerKunst();
  }
}