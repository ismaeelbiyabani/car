var car,wall;
var speed;weight;
function setup() {
  createCanvas(1000,1000);
  car=createSprite(50,200,50,50)
  car.shapeColour=colour(0,255,0)
  speed=random(55,90)
  weight=random(400,500)
 
  
}

function draw() {
  background(400,400,440);
 
  drawSprites();
}