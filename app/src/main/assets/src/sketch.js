var dots = [];
var maxDots = 100;

function Dot() {
	this.diameter = random(100);
	this.x = random(windowWidth);
	this.y = this.diameter * -1;
	this.color = color(
	      random(255),
	      random(255),
	      random(255)
	);
}

Dot.prototype.display = function() {
	noStroke();
	fill(this.color);
	ellipse(this.x, this.y, this.diameter, this.diameter);
}

Dot.prototype.fall = function() {
	this.y += this.diameter / 50;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255, 255, 255);
	if (dots.length < maxDots) {
		dots.push(new Dot());
		dots.sort(function(a, b) {
			if (a.diameter < b.diameter) {
				return -1;
			} else if (a.diameter == b.diameter) {
				return 0;
			} else {
				return 1;
			}
		});
	}

	var dead = [];

	for (var i in dots) {
		dots[i].display();
		dots[i].fall();

		if (dots[i].y > windowWidth) {
			dead.push(i);
		}
	}

	// cleanup dead dots

	for (var i in dead) {
		dots.splice(dead[i], 1);
	}
}
