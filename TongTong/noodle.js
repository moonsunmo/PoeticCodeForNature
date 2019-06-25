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

  applyTong(tongForce) {
    this.acc.add(tongForce);
  }

  update() {
    this.Tong();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }


  Tong() {
    if (this.pos.x < 0 || width < this.pos.x){
      this.acc.x = this.acc.x * -1;
      this.cR = random(255);
      this.cG = random(255);
      this.cB = random(255);
      this.w = random(20, 100);
    }
    if (this.pos.y < 0 || width < this.pos.y){
      this.acc.y = this.acc.y * -1;
      this.cR = random(255);
      this.cG = random(255);
      this.cB = random(255);
      this.w = random(20, 100);
    }
  }

  show() {
    noStroke();
    fill(this.cR, this.cG, this.cB, this.cA);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

}
