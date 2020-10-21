const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    'isStatic':true
  }

  ground= Bodies.rectangle(200,height,400,20,ground_options);
  console.log(ground);
  World.add(world,ground);
  
  var ball_options={
   'restitution':1
  }
  ball = Bodies.circle(200,100,10,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
}
