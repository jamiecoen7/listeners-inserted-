//setup canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//set the starting point 
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var ballColor = "green";
var paddleColor = "black";

//define the paddleon the canvas 
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

//
var rightPressed = false;
var leftPressed = false;


//this function allows us to draw the ball on the canvas 
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = ballColor;
	ctx.fill();
	ctx.closePath();
}

//draw the ball
function draw()	
{
	//clear the canvas 
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//draw the ball
	drawBall();
	//draw the paddle 
	drawPaddle();
	
	//bouncing the ball off the wall
	x+= dx;
	y+= dy;
	
	if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) 
	{
		dy =-dy;
		ballColor = "black";
	}
	
	if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) 
	{
		dx =-dx;
		ballColor = "yellow";
	}
}

//drawing the paddle function 
function drawPaddle()
{
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = paddleColor;
	ctx.fill();
	ctx.closePath();
	
}
//monitors documents for events that will effect the movement of the paddle
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//define functions that will handle the keydown or keyup events 
function keyDownHandler(e)
{
	if (e.keyCode == 39)
	{
		rightPressed = true;
	}
	else if (e.keyCode == 37)
	{
		leftPressed = true;
	}
}

function keyUpHandler(e)
{
	if (e.keyCode == 39)
	{
		rightPressed = false;
	}
	else if (e.keyCode == 37)
	{
		leftPressed = false;
	}
}































setInterval(draw,10);