var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5; 
var roofObject;
var rope1, rope2, rope3, rope4, rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,570,20);
	bobObject2 = new Bob(220,570,20);
	bobObject3 = new Bob(240,570,20);
	bobObject4 = new Bob(260,570,20);
	bobObject5 = new Bob(280,570,20);

	roofObject = new Roof(240,370,10,100);

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0);
	rope4 = new Rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0);
	rope5 = new Rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



