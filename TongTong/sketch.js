let noodle;
let face;

function setup() {
  createCanvas(400, 400);

  noodle = new Noodle();
  face = new Face();
}

function draw() {
  background(200);

  balmMag = random(0.1, 0.9);

  if (keyIsDown(DOWN_ARROW)) {
    growth = createVector(0, balmMag);
    hair.applyBalm(growth);
  }

  noodle.update();
  noodle.cR = 0;
  noodle.cG = 0;
  noodle.cB = 0;
  noodle.cA = 255;
  noodle.show();
  face.show();
  face.beHappy();
}
