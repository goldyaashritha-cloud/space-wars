var bg
var rocket,alien1,alien2,alien3,alien4,alien5,alien6;
var bgimg,rocketimg,alien1img,alien2img,alien3img,alien4img,alien5img,alien6img
var gameState="play"
var alienGroup
var laserGroup
var alien
var score=0

function preload(){
  bgimg=loadImage("bg4.png")
  rocketimg=loadImage("rocket2.png")
  alien1img=loadImage("alien1.png")
  alien2img=loadImage("alien2.png")
  alien3img=loadImage("alien3.png")
  alien4img=loadImage("alien4.png")
  alien5img=loadImage("alien5.png")
  alien6img=loadImage("alien6.png")
}

function setup() {

 
  createCanvas(1200, 800);
  bg=createSprite(600,400,1200,800)
  bg.addImage(bgimg)
  bg.scale=1.5;
  
  rocket=createSprite(80,400,100,150);
  rocket.addImage(rocketimg);
  rocket.scale=0.2;

  alienGroup=createGroup();

  laserGroup=createGroup();

  
 
 
  
}

function draw() {
  background("black")
  drawSprites();
  
  if(gameState==="play"){

    bg.velocityX=-3;
    if(bg.x<650){
     bg.x=1200;
      
    }
    if(keyDown(UP_ARROW)){
      rocket.y-=7
    }

    if(keyDown(DOWN_ARROW)){
      rocket.y+=7
    }
    

   
spawnalien();
    laserGroup.isTouching(alienGroup,destroyAlien)
    rocket.isTouching(alienGroup,destroyRocket)
   // if(laserGroup.isTouching(alienGroup)){
  
  //for(i=0;i<alienGroup;i++){
       
   // alienGroup.get(i).destroy();
   // score=score+1
    
    
 // }
  
//}



  }

if(gameState==="end"){
  stroke("red")
  fill("white")
  textSize(50)
  text("Game Over",250,300)
  



}



  
 }

function destroyRocket(rocket,alien){
  rocket.destroy()
  
  gameState="end"
  
  
}

function destroyAlien(alien,laser){
  alien.destroy()
  laser.destroy()
}

 function keyPressed(){
   if(keyCode===32 && gameState==="play"){
     releaseLaser();

   }
 }

 function releaseLaser(){

  var laser=createSprite(100,100,60,5);
  laser.shapeColor="red";
  laser.y=rocket.y;
  laser.x=150;
  laser.velocityX=7;
  laser.lifetime=130;
  laserGroup.add(laser);
 }


    
     
 function spawnalien(){
   if(frameCount % 150===0){
     var rand=Math.round(random(10,700))
     alien=createSprite(1200,600,10,10)
    
     
     alien.velocityX=-8
     var randimg=Math.round(random(1,6))
     switch(randimg){
       case 1:alien.addImage(alien1img);
       alien.scale=0.2;
       break;
       case 2:alien.addImage(alien2img);
       alien.scale=0.2;
       break;
       case 3:alien.addImage(alien3img);
        alien.scale=0.5;
       break;
       case 4:alien.addImage(alien4img);
       alien.scale=0.2;
       break;
       case 5:alien.addImage(alien5img);
       alien.scale=0.5;
       break;
       case 6:alien.addImage(alien6img);
       alien.scale=0.2;
       break;

       default:break;
     }
     alien.y=rand
     alienGroup.add(alien);

   }




 }    
      
     
      



