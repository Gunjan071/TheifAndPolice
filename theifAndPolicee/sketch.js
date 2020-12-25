var backGround, backGroundImg;
var Theif,theifImg;
var police,policeImg;
var coin,coinImg;
var invisibleground;
var coinGroup;
var score=0;
var gameState="play";

function preload(){
backGroundImg=loadImage("images/bg.jpg");
theifImg=loadImage("images/theif.png");
policeImg=loadImage("images/police.png");
//coinImg=loadAnimation("images/coin.gif");
coinImg=loadImage("images/coin1.png");
}


function setup(){
createCanvas(800,500);

backGround=createSprite(0,0,1200,1200);
backGround.addImage(backGroundImg);
backGround.scale=2
backGround.velocityX=-5;

theif=createSprite(150,120,40,40);
theif.addImage(theifImg);
theif.scale=0.4;
//theif.visible=false;

police=createSprite(110,120,40,40);
police.addImage(policeImg);
police.scale=0.4;
police.velocityY=3;

coinGroup=new Group();
//police.visible=false;

invisibleground=createSprite(400,485,800,30);
invisibleground.visible=false;
invisibleground.debug=true;
}

function draw(){

  background("lightblue");

  if(gameState==="play"){
  
  
if(backGround.x<0){
backGround.x=backGround.width/2;
}

if(keyDown("space")){
theif.velocityY=-8;
}

theif.velocityY=theif.velocityY+0.8;
//police.velocityX=-2;

police.collide(invisibleground);
//theif.collide(invisibleground);

if(coinGroup.isTouching(theif)){
coinGroup.destroyEach();
score=score+1;
}

if(theif.y>500){
gameState="end";
}
spawnCoin();
drawSprites();


fill("black");
textSize(20);
text("Score:"+score,700,20);
}
if (gameState==="end"){
fill("darkgreen");
textSize(100);
text("Game Over!!",400,250);

fill("purple");
textSize(70);
text("Final Score:"+score,400,270);
}
}

/*function spawnBlocks(){
    if(frameCount%240===0){
   block= createSprite(200,-50,10,10);
    block.addImage(doorImg)
      
      climber= createSprite(200,10,10,10);
      climber.addImage(climberImg);
      
      invisibleBlock= createSprite(200,15,10,10);
      invisibleBlock.width= climber.width;
      invisibleBlock.height=2;
      
    door.x=Math.round(random(120,400))
    door.velocityY=1;
     climber.x=door.x;
      climber.velocityY=1;
     invisibleBlock.x= door.x;
      invisibleBlock.velocityY=1;
      
    door.lifetime=600;
      climber.lifetime=600;
      invisibleBlock.lifetime=600;
      
    doorsGroup.add(door);
     climbersGroup.add(climber);
   invisibleBlockGroup.add(invisibleBlock);
      invisibleBlock.debug=true;
      
      
      ghost.depth=door.depth;
      ghost.depth+=1;
  }
  }*/

function spawnCoin(){
if(frameCount%250===0){
coin=createSprite(800,10,23,23);
coin.velocityX=-4;
coin.y=Math.round(random(40,90));
//coin.addAnimation("coin_gif",coinImg);
coin.addImage(coinImg);
coin.scale=0.35;

coin.depth=theif.depth;
theif.depth+=1;


coinGroup.add(coin);
coinGroup.setLifetimeEach(400);
}
}
