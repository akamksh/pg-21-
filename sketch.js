
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(width/2,670,width,20);
 leftSide = new Ground(1100,600,20,120);
 rightSide = new Ground(1350,600,20,120);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

ball = Bodies.circle(250,100,20,ball_options)
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  leftSide.show();
  rightSide.show();
  drawSprites();
  ground.show();
  ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0, y:0},{x:20, y:20})
	}
}


