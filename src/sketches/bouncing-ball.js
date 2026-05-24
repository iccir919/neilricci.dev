export default function bouncingBall(p) {
  let x = 0;
  let y = 0;
  let vx = 2;
  let vy = 3;

  p.setup = () => {
    console.log('setup running');
    p.createCanvas(600, 400);
    x = p.width / 2;
    y = p.height / 2;
  };

  p.draw = () => {
    p.background(255);
    x += vx;
    y += vy;
    if (x < 0 || x > p.width) vx *= -1;
    if (y < 0 || y > p.height) vy *= -1;
    p.fill(0);
    p.noStroke();
    p.ellipse(x, y, 30, 30);
  };
}