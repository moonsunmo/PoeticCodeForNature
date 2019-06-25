// class Face {
//
//   constructor() {
//     this.pos = createVector(width/4, height/2);
//     this.cR = 0;
//     this.cG = 0;
//     this.cB = 255;
//     this.cA = 255;
//
//     this.w = 30;
//   }
//
//   beHappy() {
//     let sadness = map(hair.pos.y, 0, height, 255, 0);
//     let happiness = map(hair.pos.y, 0, height, 0, 255);
//     this.cB = sadness;
//     this.cR = happiness;
//     this.cG = happiness;
//
//   }
//
//   show() {
//     noStroke();
//     fill(this.cR, this.cG, this.cB, this.cA);
//     ellipse(this.pos.x, this.pos.y, this.w);
//   }
//
// }
