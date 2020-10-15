const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,790,400,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
}