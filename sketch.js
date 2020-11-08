const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ball, platform, string;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  ball = new Ball(400, 200, 40, 40);

  platform = new Box(400, 100, 100, 20)

  string = new Chain(ball.body, {x:400, y: 100});
  

 // createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);

  
  ball.display();

  platform.display()

  string.display();
 
  drawSprites();
}

function mouseDragged() {
  ball.body.position.x = mouseX
  ball.body.posiition.y = mouseY
}