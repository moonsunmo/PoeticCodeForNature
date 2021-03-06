let hair;
let face;

function setup() {
  createCanvas(400, 400);
  background(200);

  hair = new Hair();
  face = new Face();
}

function draw() {

  balmMag = random(0.1, 0.9);

  if (keyIsDown(DOWN_ARROW)) {
    growth = createVector(0, balmMag);
    hair.applyBalm(growth);
  }

  hair.update();
  hair.cR = 0;
  hair.cG = 0;
  hair.cB = 0;
  hair.cA = 255;
  hair.show();
  face.show();
  face.beHappy();
}
