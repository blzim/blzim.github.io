function setup() {
	createCanvas(900, 600);
	background(0);
}

function draw() {
	if (mouseIsPressed){
		fill(0, 0, 255);
	} else {
		fill(255);
	}
	ellipse(mouseX, mouseY, 80, 80);
}