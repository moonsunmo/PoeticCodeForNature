class Face {

  constructor() {
    this.cR = 0;
    this.cG = 0;
    this.cB = 255;
    this.cA = 255;

    this.w = 30;
  }

  update() {

  }

  show() {
    noStroke();
    fill(this.cR, this.cG, this.cB, this.cA);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

}
