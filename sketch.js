var ship
var sea 
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,400)
  sea.addImage(seaImg)
  sea.scale=0.5
  ship=createSprite(250,200)
  ship.addAnimation("ship",shipImg1)
  ship.scale=0.3

}

function draw() {
  background("blue");
 sea.velocityX=2
 if(sea.x >400){
   sea.x=200
 }
  drawSprites()
}