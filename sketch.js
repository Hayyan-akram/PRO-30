const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,set1,set2;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

function preload() {

    polygon_img=loadImage("polygon.png")
    
}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,height,1200,20);

    //set1

    set1=new Ground(400,300,370,20);

    //set1 level4

    block1=new Box(250,260,50,60);
    block2=new Box(300,260,50,60);
    block3=new Box(350,260,50,60);
    block4=new Box(400,260,50,60);
    block5=new Box(450,260,50,60);
    block6=new Box(500,260,50,60);
    block7=new Box(550,260,50,60);

    //set1 level3
    block8=new Box(300,200,50,60);
    block9=new Box(350,200,50,60);
    block10=new Box(400,200,50,60);
    block11=new Box(450,200,50,60);
    block12=new Box(500,200,50,60);

    //set1 level2
    block13=new Box(350,140,50,60);
    block14=new Box(400,140,50,60);
    block15=new Box(450,140,50,60);

    //set1 level1 (aka top)
    block16=new Box(400,80,50,60)

    //set2

    set2=new Ground(800,250,280,20)

    //set2 layer3
    block17=new Box(700,210,50,60);
    block18=new Box(750,210,50,60);
    block19=new Box(800,210,50,60);
    block20=new Box(850,210,50,60);
    block21=new Box(900,210,50,60);

    //set2 layer2
    block22=new Box(750,150,50,60);
    block23=new Box(800,150,50,60);
    block24=new Box(850,150,50,60);

    //set2 layer1 (aka top)
    block25=new Box(800,90,50,60);


    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot=new SlingShot(this.polygon,{x:100,y:200});

    
}

function draw() {
    background("orange")

    ground.display();
    //set1
    set1.display();

    //set1 level4
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    //set1 level3

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    
    //set1 level2
    block13.display();
    block14.display();
    block15.display();

    //set1 level1(aka top)
    block16.display();

    //set2
    set2.display();

    //set2 layer3
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    //set2 layer2
    block22.display();
    block23.display();
    block24.display();

    //set2 layer1 (aka top)
    block25.display();

    imageMode=(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
