let noodle;

function setup() {
  createCanvas(400, 400);

  noodle = new Noodle();
}

function draw() {
  background(200);

  hunger = createVector(0, noodle.mass * 0.2);
  noodle.applyTong(hunger);

  noodle.update();
  noodle.show();
}
