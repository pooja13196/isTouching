var a,b

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,400);
a= createSprite(400, 200, 80, 30);
a.shapeColor= "red";
b= createSprite(200,200,50,80);
b.shapeColor="red";

gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="orange";
gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="orange";
gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="orange";
gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="orange";
}

function draw() {
  background("blue");
  a.x= World.mouseX;
  a.y= World.mouseY;
  
  //console.log(a.x-b.x);

  if(isTouching(a,gameObject1)){
    a.shapeColor="green";
    gameObject1.shapeColor="green";
  }
  else{
    a.shapeColor="red";
    gameObject1.shapeColor="orange";
  }
  
  drawSprites();
}

