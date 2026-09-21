// Variabelen
  // Vakjes
  let vak1
  let vak2
  let vak3
  let vak4
  let vak5
  let vak6
  let vak7
  let vak8
  let vak9

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(0)
  rect(80, 80, 240, 240, 10);

  fill(255)
  strokeWeight(0)

  // Rij 1
  rect(90, 90, 60, 60, 10) // 1
  rect(170, 90, 60, 60, 10) // 2
  rect(250, 90, 60, 60, 10) // 3
  
  // Rij 2
  rect(90, 170, 60, 60, 10) // 4
  rect(170, 170, 60, 60, 10) // 5
  rect(250, 170, 60, 60, 10) // 6

  // Rij 3
  rect(90, 250, 60, 60, 10) // 7
  rect(170, 250, 60, 60, 10) // 8
  rect(250, 250, 60, 60, 10) // 9  
}

function keyPress() {
  
}