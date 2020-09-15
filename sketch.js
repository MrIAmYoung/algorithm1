var spriteM, spriteF;

function setup() {
  createCanvas(800,400);
  spriteF=createSprite(400, 200, 100, 50);
  spriteF.shapeColor="powderblue";
  spriteF.velocityX=5;
  spriteF.velocityY=4;
  spriteM=createSprite(700,200,100,50);
  spriteM.shapeColor="aqua";
  spriteM.velocityX=-4;
  spriteM.velocityY=-5;




}

function draw() {
  background(20,25,35);
  
  console.log(spriteM.y-spriteF.y);
  
  

  if (spriteM.x>800 ||
      spriteM.x<0){
        spriteM.velocityX=spriteM.velocityX*(-1);
      }
  else if (spriteM.y<0 ||
           spriteM.y>400){
            spriteM.velocityY=spriteM.velocityY*(-1);
           }
    
  if (spriteF.x>800 ||
            spriteF.x<0){
              spriteF.velocityX=spriteF.velocityX*(-1);
            }
  else if (spriteF.y<0 ||
                 spriteF.y>400){
                  spriteF.velocityY=spriteF.velocityY*(-1);
                 }

  if (spriteM.x-spriteF.x<spriteM.width/2+spriteF.width/2 &&
      spriteF.x-spriteM.x<spriteM.width/2+spriteF.width/2){
        spriteM.velocityX=spriteM.velocityX*(-1);
        spriteF.velocityX=spriteF.velocityX*(-1);
        spriteM.shapeColor="red";
        spriteF.shapeColor="blue";
      }

      else {
        spriteM.shapeColor="aqua";
        spriteF.shapeColor="powderblue";
      }

     if (spriteF.y-spriteM.y<spriteM.height/2+spriteF.height/2 &&
      spriteM.y-spriteF.y<spriteM.height/2+spriteF.height/2){
        spriteM.velocityY=spriteM.velocityY*(-1);
        spriteF.velocityY=spriteF.velocityY*(-1);
        spriteM.shapeColor="yellow";
        spriteF.shapeColor="green";
      }

      else {
    spriteM.shapeColor="aqua";
    spriteF.shapeColor="powderblue";
  }

  drawSprites();
}