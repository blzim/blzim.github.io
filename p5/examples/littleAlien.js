function setup() {
	createCanvas(480, 270);
	background(200);
}

function draw() {
	ellipseMode(CENTER);
	rectMode(CENTER);
	
	// Body
	fill(255, 0, 0);
	rect(240, 145, 20, 100);
	
	// Head 4th fill value = alpha transparency
	fill(0, 0, 255);
	ellipse(240, 115, 60, 60);
	
	// Eyes
	fill(0, 255, 0);
	ellipse(221, 115, 16, 32);
	ellipse(259, 115, 16, 32);
	
	// Legs
	line(230, 195, 220, 205);
	line(250, 195, 260, 205);
	
	// Arms
	line(230, 150, 200, 160);
	line(250, 150, 280, 160);
}
