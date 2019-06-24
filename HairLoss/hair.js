class Hair {

  constructor() {
    this.pos = createVector(width/2, 0);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.cR = 1;
    this.cG = 1;
    this.cB = 1;
    this.cA = 255;

    this.w = 10;
  }

  applyBalm(aBalm) {
    this.acc.add(aBalm);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.fri = random(0.9, 0.99) ; // friction.

    this.acc.set(0, 0);
    this.vel.mult(this.fri); // Apply friction.
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = 0;
      this.pos.y = height;
    }

    if (this.pos.y < 0) {
      this.vel.y = 0;
      this.pos.y = 0;
    }

    if (this.pos.x > width) {
      this.vel.x = 0;
      this.pos.x = width;
    }

    if (this.pos.x < 0) {
      this.vel.x = 0;
      this.pos.x = 0;
    }
  }

  show() {
    fill(this.cR, this.cG, this.cB, this.cA);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

}
