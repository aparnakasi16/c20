const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

engine = Engine.create();
world = engine.world;

var object;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  object_options= {
    isStatic : true
  }


  object = Bodies.rectangle(200,200,50,50, object_options);
  World.add(world,object);


  
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);

}

function draw() {
  background(255,255,255); 
  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  drawSprites();
}