const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,5);
    ground1 = new Ground(450,370,300,10);
    ground2 = new Ground(800,200,300,10);
    box1 = new Box(450,200,300,40);

    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    ground.display();
    ground1.display();
    ground2.display();
    box1.display();
    //slingshot.display();    
}

//function mouseDragged(){
  //  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}

//function mouseReleased(){
  //  slingshot.fly();
//}