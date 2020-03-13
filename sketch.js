const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box2, box3, sq1, sq2, ground;
var engine, world;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800, 400);

  ground = new Ground(400, 375, 800, 10);
  box1 = new Box(400, 200, 50, 100);
  box2 = new Box(325, 200, 50, 100);
  box3 = new Box(475, 200, 50, 100);
  sq1 = new Box(325, 100, 75, 75);
  sq2 = new Box(475, 100, 75, 75);
}

function draw() {
  console.log(mouseX, mouseY);
  background(255, 255, 255);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  fill("blue");
  sq1.display();
  sq2.display();
  fill("green");
  triangle(375, 265, 425, 265, 400, 215);
  ground.display();
  drawSprites();
}