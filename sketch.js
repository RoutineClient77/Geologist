const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400,300,100,30);
  ground = new Ground(600,height,1200,20);
	stone = new Stone(600,400,100,100);
	rubber = new Rubber(600,200,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
}



