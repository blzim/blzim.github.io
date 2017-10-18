var r = 0;
var b = 255;

function setup() {
	createCanvas(900, 500);
}

function draw() {
	r = map(mouseX, 0, 900, 0, 255);
	b = map(mouseX, 0, 900, 255, 0);
	background(r, 0, b);
	fill(0, 255, 0);
	ellipse(mouseX, 200, 44, 44);
}