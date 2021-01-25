const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon, polygonimage;
var chain;



function preload() {
    polygonimage = loadImage("polygon.png");
}

function setup() {

    createCanvas(1200, 600);

    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50, 200, 50);
    World.add(world, polygon);

    chain = new slingShot(this.polygon, {
        x: 130,
        y: 250
    });

    mainground = new Ground(600, 590, 1200, 30);

    ground1 = new Ground(550, 420, 280, 10);
    ground2 = new Ground(950, 230, 250, 10);

    //ground1 level 1
    box1 = new Box(445, 415, 30, 50);
    box2 = new Box(470, 415, 30, 50);
    box3 = new Box(500, 415, 30, 50);
    box4 = new Box(530, 415, 30, 50);
    box5 = new Box(560, 415, 30, 50);
    box6 = new Box(590, 415, 30, 50);
    box7 = new Box(620, 415, 30, 50);
    box8 = new Box(640, 415, 30, 50);

    //ground1 level 2
    box9 = new Box(470, 380, 30, 50);
    box10 = new Box(500, 380, 30, 50);
    box11 = new Box(530, 380, 30, 50);
    box12 = new Box(560, 380, 30, 50);
    box13 = new Box(590, 380, 30, 50);
    box14 = new Box(620, 380, 30, 50);

    //ground1 level 3
    box15 = new Box(500, 345, 30, 50);
    box16 = new Box(530, 345, 30, 50);
    box17 = new Box(560, 345, 30, 50);
    box18 = new Box(590, 345, 30, 50);

    //ground1 level 3
    box19 = new Box(530, 310, 30, 50);
    box20 = new Box(560, 310, 30, 50);

    //ground1 level 4
    box21 = new Box(545, 275, 30, 50);

    //ground2 level 1
    box22 = new Box2(860, 225, 30, 50);
    box23 = new Box2(884, 225, 30, 50);
    box24 = new Box2(914, 225, 30, 50);
    box25 = new Box2(944, 225, 30, 50);
    box26 = new Box2(974, 225, 30, 50);
    box27 = new Box2(1004, 225, 30, 50);
    box28 = new Box2(1030, 225, 30, 50);

    //ground2 level 2
    box29 = new Box2(884, 190, 30, 50);
    box30 = new Box2(914, 190, 30, 50);
    box31 = new Box2(944, 190, 30, 50);
    box32 = new Box2(974, 190, 30, 50);
    box33 = new Box2(1004, 190, 30, 50);

    //ground3 level 3
    box34 = new Box2(914, 155, 30, 50);
    box35 = new Box2(944, 155, 30, 50);
    box36 = new Box2(974, 155, 30, 50);

    //ground4 level 4
    box37 = new Box2(944, 120, 30, 50);
}

function draw() {


    background("black");


    Engine.update(engine);

    imageMode(CENTER);

    image(polygonimage, polygon.position.x, polygon.position.y, 40, 40);

    chain.display();

    mainground.display();
    ground1.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();

    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();

    box21.display();

    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();

    box34.display();
    box35.display();
    box36.display();

    box37.display();
}


function mouseDragged() {
    Matter.Body.setPosition(this.polygon, {
        x: mouseX,
        y: mouseY
    });
}

function mouseReleased() {
    chain.fly();
}

function keyPressed() {
    if (keyCode === 32) {
       chain.attach(this.polygon);
     }
   }