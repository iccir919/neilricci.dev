export default function randomWalkCircles(p) {
  p.setup = () => {
    p.createCanvas(640, 240);
    p.background(255);
  };

  p.draw = () => {
    p.fill(0, 25);
    p.stroke(0, 50);
    // Draw a random circle each time through draw()
    p.circle(p.random(p.width), p.random(p.height), 16);
  };
}