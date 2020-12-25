var fixedRect, movingRect;
var dhruvF,dhruvM;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

dhruvF=createSprite(300,200,50,50);
dhruvF.shapeColor="white";
dhruvM=createSprite(300,400,40,40);
dhruvM.shapeColor="blue"

//movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;


//dhruvF.velocityY=4;
//dhruvM.velocityY=-4

}

function draw() {
  background(142,120,9); 

//bounceOff(movingRect,fixedRect);
//bounceOff(dhruvF,dhruvM);
  drawSprites();
  
}
