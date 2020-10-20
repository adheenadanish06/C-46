  

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var wall,wall2;
var player;
var ncPlayer;
var Ground;
//background

var bg;
var bg1;
var bg2;
var bg3;
var bg4, pimage, ncPimage;

var player, ncPlayer,ground;

var bulletGroup, enemybulletGroup;

//score
var count = 200;
var ncCount =  200;

var a = 1;

var playerInfo, enemyInfo, restart;

var life1, life2,life3

function preLoad(){
    bg = loadImage("battlegrond2.png");
    bg1 = loadImage("battlegrond3.png");
    bg2 = loadImage("battleground6.png");
    pimage = loadImage("robot.jpg");
    ncPimage = loadImage("robot.jpg");
}

function setup (){

    createCanvas(displayWidth-30,displayHeight-20);

    player = createSprite(60,650,70,70);
    player.debug = true;
     ncPlayer = createSprite(displayWidth-100,displayHeight - 200,70,70);
     ncPlayer.debug = true;
     ground = createSprite(displayWidth/2,displayHeight - 190,displayWidth,20);
     ground.debug = true;

     

     //info bars
     playerInfo =  createSprite(displayWidth/2 - 385,displayHeight-20,displayWidth/2,320);
     playerInfo.debug =true;
     enemyInfo =  createSprite(displayWidth - 385,displayHeight-20,displayWidth/2,320);
     enemyInfo.debug = true;
     

     // walls

     //wall
     wall = createSprite(displayWidth,650,20,displayHeight*2);
     wall.debug =true;

     //wall2
     wall2 = createSprite(displayWidth /2 - 770,650,20,displayHeight*2);
     wall2.debug =true;

      bulletGroup = new Group();
      enemybulletGroup = new Group();


}


function draw(){

    background(0); 

    playerInfo.x = displayWidth/2 - 385;
    enemyInfo.x = displayWidth- 385;




   
   
    
    //do not remove these comments Adheena :ok
 // how should I realese the bullet 
    //if keydown letter b then bullet.velocityX = 5;
    //if bullet.istouching enemy then reduce health of enemy.

    //if player touches enemy reduce health of player



 
 var release = random(1,100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);





    if(gameState === PLAY){

      

      

 
  
      if(keyDown("space")&& player.y >= 600){
        player.velocityY = -12 ;
      }

      
    // enemy

text(" Enemy's health:"+ ncCount, ncPlayer.x - 500  , ncPlayer.y - 50);
       

      //player
      
 text("health:"+ count, player.x -20, player.y - 50);
        
         //jump when the space key is pressed
      
        if(keyDown("b") ){
          bullet.x = player.x;
          bullet.velocityX = 15;
        }

        ncPlayer.velocityY = ncPlayer.velocityY + 0.8;


       
        if(player.collide(enemyBullet)){
          enemyBullet.x = ncPlayer.x;
          enemyBullet.velocityY = 0;
        }
        

         //moves left

         if(keyWentDown(LEFT_ARROW) ){
            player.velocityX = -3 ;
  
          }

          // moves right
          if(keyWentDown(RIGHT_ARROW) ){
            player.velocityX = 3 ;
  
          }

          if(keyWentUp(LEFT_ARROW)){
            player.velocityX = 0;
          }
          

          if(keyWentUp(RIGHT_ARROW)){
            player.velocityX = 0 ;
          }

      
        //add gravity
        player.velocityY = player.velocityY + 0.8;

        if(bullet.isTouching(ncPlayer) ){
          ncCount = ncCount -5;
        }

        if(enemyBullet.isTouching(player) ){
           count = count -5;
        }

        
         
        }
      // Win
        if(ncCount === 0){
          gameState = END;
          textSize(32);
          text(" You win",displayWidth/2 - 30 , displayHeight/2- 50);
        }

        //lose
        if(count === 0){
          gameState = END;
          textSize(32);
          text("You lose",displayWidth/2 - 30 , displayHeight/2);
        }

      else if(gameState === END) {
        
        textSize(40);
        text("Game Over", displayWidth/2 - 60 , displayHeight/2);

        setTimeout(() => {
          stroke (165, 42, 42, 0.021);
        }, 5000);

        //don't jump when the space key is pressed
        if(keyDown("space") && player.y >= 650){
            player.velocityY = 0 ;
          }

  
           //moves left
           if(keyWentDown(LEFT_ARROW)){
              player.velocityX = 2 ;
    
            }
            if(keyWentUp(LEFT_ARROW)){
              player.velocityX = 0 ;
            }
  
            // moves right
            if(keyWentDown(RIGHT_ARROW) ){
              player.velocityX = 0 ;
    
            }

            if(keyWentUp(RIGHT_ARROW)){
              player.velocityX = 0 ;
            }
          
        
        
          }

          player.collide(ground);

      ncPlayer.collide(ground);

      ground.collide(ncPlayer);


      //ncPlayer
      ncPlayer.collide(bullet);

      if(bullet.collide(ncPlayer)){
        bullet.x = player.x;
        bullet.velocityY = 0;
      }

      bullet.collide(ncPlayer);

      if(ncPlayer.collide(bullet)){
        bullet.x = player.x;
        bullet.velocityY = 0;
      }

      

      
      if(ncPlayer.collide(wall)){
        moveLeft();
        releaseBullet();
      }
      
      if(ncPlayer.collide(wall2)){
        moveRight();
        releaseBullet();
      }
      



      
//wall

player.collide(ncPlayer);
ncPlayer.collide(player);

//player
enemyBullet.collide(player);

      ncPlayer.collide(wall);
      player.collide(wall);
      //wall2
      bullet.collide(wall);

      enemyBullet.collide(wall);

      ncPlayer.collide(wall2);
      player.collide(wall2);
    
    drawSprites();

    }

   function spawnBullets(){
     if(keyDown(b)){
       var bullet =  createSprite(60,displayHeight-220,10,5);
       bullet.velocityX = 15;
     }
   } 

   function spawnEnemyBullets(){
    if(frameCount % 60 ===0){
      var enemyBullet =  createSprite(60,displayHeight-20,10,5);
      enemyBullet.velocityX = -15;
      
    }
  }

  function enemyBulletPosition(){
    if(player.x < ncPlayer.x){
      enemyBullet.velocityX =  15;
    }
  }

   //enemy movements
   function jump(){
    if( a = 1 && ncPlayer.y >= 650){
      ncPlayer.velocityY = -12 ;
    }
   }

    function moveLeft(){
      ncPlayer.velocityX = -3 ;
    }

    function moveRight(){
      ncPlayer.velocityX = 3 ;
    }

    function nonmoveLeft(){
      ncPlayer.velocityX = 0 ;
    }

    function nonmoveRight(){
      ncPlayer.velocityX = 0 ;
    }





  // when the player jumps to the opposite side where the bullet has been shot that would n't make the game fun right
  // The enemy bullet is always been shot at the left side ..right?  so when the playerjumps to the right side the player would win easily

  //player will jump up
  //and the bullets keep coming so there is a high chance the enemy's bullet will hitthe player.
  //also create two groups enemybulletgroup and playerbulletgroup so we can code for reducing health pointsnot here in the draw function
  
  
  //NOT here in the draw function wait. dont write anything for 2 mins
  

  //yes, I get that :) just make it work, the story and game features are your to choose.

  /* when I wrote the code I had made a function that when the enemy hits the walls
   he starts moving the opposite direction of which the enemy hit*/