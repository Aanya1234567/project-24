const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,20)
    rubber=new Rubber(900,450,70)
    hammer = new Hammer(60,200);
    iron=new Iron(90,300);
    stone=new Stone(30,100);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
  rubber.display();
    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    
 
}