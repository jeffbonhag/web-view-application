var x = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  var c = color(
      random(255),
      random(255),
      random(255)
      );
  stroke(c);
  fill(c);
  ellipse(random(width), random(height), 100, 100);
  x = x + 1;
}
