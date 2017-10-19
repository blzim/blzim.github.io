var x = 0;
var speed = 10;
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	stroke(255);
	noStroke();
	fill(0, 0, 255);
	ellipse(x, 200, 100, 100);
	
	if (x > width || x < 0) {
		speed = speed * -1;
	}
	x = x + speed;
}