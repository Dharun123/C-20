const { ANALYZE_FOR_ENTRY_COMPONENTS } = require("@angular/core");

var xyz
var abc

function setup() {
  createCanvas(800,400);
  xyz = createSprite(400, 200, 50, 50);
  abc = createSprite(200,200,30,30);
}

function draw() {
  background(255,255,255);
  abc.y = World.mouseY;
  abc.x = World.mouseX;
  xyz.shapeColor = "blue";
  abc.shapeColor = "red";
  //console.log((abc.width+xyz.width)/2);
  console.log(abc.width);
  if((abc.x-xyz.x<=(abc.width+xyz.width)/2)&&(xyz.x-abc.x<=(abc.width+xyz.width)/2)&&(abc.y-xyz.y<=(abc.height+xyz.height)/2)&&(xyz.y-abc.y<=(abc.height+xyz.height)/2))
  {
    abc.shapeColor ="green";
  }
  else
  {
    abc.shapeColor = "red";
  }


  drawSprites();
}