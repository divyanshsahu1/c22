const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var red1,green1,line;
var ball;

function setup() {
  createCanvas(800,800);

  engine=Engine.create();
  world=engine.world

var ground_options={
  isStatic: true
  
}
var red1_options={
  isStatic: true
  
}
var green1_options={
  isStatic: true
  
}

  ground=Bodies.rectangle(500,600,1200,20,ground_options)
  World.add(world,ground)

  red1=Bodies.rectangle(210,530,100,120,red1_options)
  World.add(world,red1)

  green1=Bodies.rectangle(340,530,100,120, green1_options)
  World.add(world,green1)

  var line_options={
    isStatic: true,
    angle :-60
  }
  line=Bodies.rectangle(650,530,100,20, line_options)
  World.add(world,line)

  
  console.log(line)
  var ball_options={
    restitution: 1.1
  }
 ball=Bodies.circle(650,100,20,ball_options)
 World.add(world,ball)
 //console.log(ball)
}

function draw() {
  background("lightblue"); 
  Engine.update(engine)
  rectMode(CENTER) 
  fill("brown")
  rect(ground.position.x,ground.position.y,1200,20)
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,50,50)
  fill("red")
  rect (red1.position.x,red1.position.y,100,120)
  fill("green")
  rect (green1.position.x,green1.position.y,100,120)
  fill("purple")
 
  rect(line.position.x,line.position.y)
 
  drawSprites();
}