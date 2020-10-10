
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,obstacleGroup;
var bananaGroup, obstacleGroup
var score;
var ground;
var gameState="play";
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(50,350,40,40);
  monkey.addAnimation("monkeyr",monkey_running);
  monkey.scale=0.09;
  ground =createSprite(200,380,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  bananaGroup=new Group();
  obstacleGroup=new Group();
  gameState="play";
}


function draw() {
background(220);
 if(gameState==="play"){
   if(ground.x<200){
     ground.x=200;
   }
 if(keyDown("space") && monkey.y>300){
    monkey.velocityY=-12;
  }
    
  monkey.velocityY=monkey.velocityY+0.8;
  if(ground.x<200){
ground.x=200;
  }
   if(obstacleGroup.isTouching(monkey)){
     gameState="end";
   }
  
   survivalTime=Math.ceil(frameCount/frameRate());
   text("Survival Time:"+survivalTime,300,40)
   food();
   spawnobstacles();
   monkey.collide(ground);
   
}
  if(gameState==="end"){
    bananaGroup.setVelocityXEach(0);
     bananaGroup.setLifetimeEach(-1);
     obstacleGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
    ground.velocityX=0;
    monkey.collide(ground);
  }
     
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(380,20,20,20);
  banana.y=Math.round(random(220,300));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=110;
    bananaGroup.add(banana);
  }
}

function spawnobstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(360,360,40,40);
   obstacle.lifetime=110;
    obstacle.addImage("ob",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacleGroup.add(obstacle);
  }
}








