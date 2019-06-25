class Noodle {

  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.cR = 0;
    this.cG = 0;
    this.cB = 0;
    this.cA = 255;

    this.w = random(20, 100);
    this.mass = this.w / 100;
  }

  applyTong(tongForce) {
    var f = tongForce.copy();
    f.div(this.mass);
    this.acc.add(tongForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.Tong();
  }


  Tong() {
    if (this.pos.x < 0){
      this.vel.x = this.vel.x * -1;
      this.pos.x = 0;
      this.cR = random(255);
      this.cG = random(255);
      this.cB = random(255);
      this.w = random(20, 100);
      this.mass = this.w / 100;
    }
    if (this.pos.y > height){
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
      this.cR = random(255);
      this.cG = random(255);
      this.cB = random(255);
      this.w = random(20, 100);
      this.mass = this.w / 100;
    }
    if (this.pos.x > width){
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
      this.cR = random(255);
      this.cG = random(255);
      this.cB = random(255);
      this.w = random(20, 100);
      this.mass = this.w / 100;
    }
}

  show() {
    noStroke();
    fill(this.cR, this.cG, this.cB, this.cA);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

}
