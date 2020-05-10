const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(900,900);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,890,900,20);
    fort1 = new Fort(450,450,450,250);
    pillar1 = new Pillar(725,450,100,350);
    pillar2 = new Pillar(175,450,100,350);
    head1 = new Head(450,200,40,40);
    head2 = new Head(550,200,40,40);
    head3 = new Head(350,200,40,40);
    head4 = new Head(650,200,40,40);
    head5 = new Head(250,200,40,40);
    platform1 = new Platform(175,100,150,50);
    platform2 = new Platform(725,100,150,50)
    phead1 = new Head(175,50,30,30);
    phead2 = new Head(125,50,30,30);
    phead3 = new Head(225,50,30,30);
    phead4 = new Head(725,50,30,30);
    phead5 = new Head(775,50,30,30);
    phead6 = new Head(675,50,30,30);
}

function draw(){
    background("black");
    Engine.update(engine);
    

    ground.display();
    fort1.display();
    pillar1.display();
    pillar2.display();
    head1.display();
    head2.display();
    head3.display();
    head4.display();
    head5.display();
    platform1.display();
    platform2.display();
    phead1.display();
    phead2.display();
    phead3.display();
    phead4.display();
    phead5.display();
    phead6.display();

}