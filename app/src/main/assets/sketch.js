var x = 0;

function setup() {
  createCanvas(200, 200);
}

function draw() {
  var c = color(
      random(255),
      random(255),
      random(255)
      );
  stroke(c);
  fill(c);
  ellipse(random(width), random(height), 20, 20);
  x = x + 1;
}
