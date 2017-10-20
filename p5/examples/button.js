function setup() {
	createCanvas(900, 500);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(2);
	noFill();
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		if (mouseIsPressed) {
			background(255, 0, 0);
		}
		fill(0, 0, 255);
		}
		rectMode(CENTER);
		rect(300, 200, 100, 100);
}