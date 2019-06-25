class Noodle {

  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.cR = 0;
    this.cG = 0;
    this.cB = 0;
    this.cA = 255;

    this.w = 20;
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


  Tong() {
    if (this.pos.c < 0 || width < this.pos.x){
      this.acc.x = this.acc.x * -1;
    }
  }

  show() {
    noStroke();
    fill(this.cR, this.cG, this.cB, this.cA);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

}
