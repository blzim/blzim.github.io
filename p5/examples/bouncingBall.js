var ball = {
	x: 300,
	y: 200,
	xspeed: 8,
	yspeed: -6
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	move();
	bounce();
	display();
}


function move() {
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

function bounce() {
		if (ball.x > width || ball.x < 0) {
		ball.xspeed = ball.xspeed * -1;
	}
	if (ball.y > height || ball.y < 0) {
		ball.yspeed = ball.yspeed * -1;
		}
}

function display() {
	fill(0, 0, 255);
	ellipse(ball.x, ball.y, 48, 48);
}
