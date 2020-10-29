const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin,ground,paper;

function setup() {
 
 createCanvas(800,400);
 createSprite(400, 200, 50, 50);
 
 engine = Engine.create();
 world = engine.world;
 
 paper = new Paper(30,112,10)
 ground = new Ground(50,400,1500,10)
 part1 = new Dustbin(380,330,20,120)
 part2 = new Dustbin(530,330,20,120)
 part3 = new Dustbin(450,380,150,20)

 Engine.run(engine);

 }

 function draw() {
 
 background("blue");  
 Engine.update(engine);

 part3.display();
 part2.display();
 part1.display();
 ground.display();
 paper.display();
 

 }


 function keyPressed(){

 if(keyCode === UP_ARROW) {

 
 Matter.Body.applyForce(paper.body,paper.body.position,{x: 10,y: -20})

 }

 }