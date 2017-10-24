var words = ["Blackbird singing in the dead of night...", "Take these broken wings and learn to fly", "All your life...", "You were only waiting for this moment to arise", "Blackbird singing in the dead of night...", "Take these sunken eyes and learn to see", "All your life...", "You were only waiting for this moment to be free", "Blackbird fly...", "Into the light of dark black night", "Blackbird singing in the dead of night", "Take these broken wings and learn to fly","All your life...", "You were only waiting for this moment to arise."];

var index = 0;

function setup() {
	createCanvas(800, 400);
}

function draw() {
	background(0);
	fill(0, 0, 255);
	textSize(32);
	text(words[index], 20, 100);
}

function mousePressed() {
	index = index + 1;
	if (index == words.length) {
		index = 0;
	}
}