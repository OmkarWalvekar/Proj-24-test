
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1, box2, box3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,450,20);

	box1 = new Dustbin(1250,580,200,20);
	box2 = new Dustbin(1150,525,20,130);
	box3 = new Dustbin(1350,525,20,130);

	ground = new Ground(width/2,600,width,20);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	paper.display();

	ground.display();

	box1.display();
	box2.display();
	box3.display();

  keyPressed();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:05,y:-05});

	}
}



