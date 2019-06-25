let noodle;
// let face;

function setup() {
  createCanvas(400, 400);

  noodle = new Noodle();
  // face = new Face();
}

function draw() {
  background(200);

  // hungerMag = random(0.1, 0.9);
  hunger = createVector(0, 0.1);
  noodle.applyTong(hunger);


  noodle.update();
  // noodle.cR = 0;
  // noodle.cG = 0;
  // noodle.cB = 0;
  // noodle.cA = 255;
  noodle.show();
  // face.show();
  // face.beHappy();
}
