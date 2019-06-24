let roundPaint;

function setup() {
  createCanvas(400, 400);
  background(255);

  roundPaint = new Material();
}

function draw() {

  windMag = random(0.1, 0.9);

  if (keyIsDown(DOWN_ARROW)) {
    windN = createVector(0, windMag);
    roundPaint.addForce(windN);
  }

  roundPaint.update();
  roundPaint.cR = 100;
  roundPaint.cG = 100;
  roundPaint.cB = 100;
  roundPaint.cA = 5;
  roundPaint.show();
}
