let ballSize = 50
let ballX = 100
let ballY = 100
let ballSpeedX = 50
let ballSpeedY = 55
let ballRad = ballSize / 2

function setup() {
  createCanvas(1000, 500);
  frameRate(120)
}

function draw() {
  background(220);
  circle(ballX, ballY, ballSize)
  ballX = ballX + ballSpeedX
  ballY = ballY + ballSpeedY
  if (ballX < (0 + ballRad) || ballX > (width - ballRad)) {
    ballSpeedX = -ballSpeedX
  }
  if (ballY < (0 + ballRad) || ballY > (height - ballRad)) {
    ballSpeedY = -ballSpeedY
  }
}

