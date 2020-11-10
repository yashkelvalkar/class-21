var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1 = createSprite(200,600,30,30);
  o1.shapeColor = "green";

  o2 = createSprite(400,600,30,30);
  o2.shapeColor = "green";

  o3 = createSprite(600,600,30,30);
  o3.shapeColor = "green";

  a1 = createSprite(60,60,30,30);
  a1.shapeColor = "blue";
  a2 = createSprite(60,600,30,30);
  a2.shapeColor = "purple";

a1.velocityY=4;
a2.velocityY=-4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,o3)){
movingRect.shapeColor="yellow";
o3.shapeColor="yellow";
  }

else {
  movingRect.shapeColor="green";
  o3.shapeColor="green";
}
bounceOff(a1,a2);

  drawSprites();
}