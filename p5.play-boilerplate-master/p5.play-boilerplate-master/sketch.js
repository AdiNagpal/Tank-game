var player1 
var player2 
var bullet1
var gameState = "play"

function preload(){
  player2img = loadImage("player2tankimage.png")
  player1img = loadImage("player1tankimage.png")
  bullet1img = loadImage("fireball.png")
}

function setup() {
  createCanvas(1360,655);
  player1 = createSprite(25,327.5, 50, 50)
  player1.addImage(player1img)
  player1.scale = 0.3
  player2 = createSprite(1335,327.5,50,50)
  player2.addImage(player2img)
  player2.scale = 0.3

  edges = createEdgeSprites()
  bulletsGroup = new Group()
  bulletsGroup1 = new Group()

  
}

function draw() {


  background(0,0,0);  

  if(gameState === "play"){
  

    if (keyDown(UP_ARROW)){
    player2.y = player2.y-6
  }

  if(keyDown(DOWN_ARROW)){
    player2.y = player2.y+6
  }

  if(keyDown("W")){
    player1.y = player1.y-6
  }
    
   if(keyDown("S")){
     player1.y = player1.y+6
   } 

   function keyPressed(){
    if(keyCode === 32){
    var temporaryBullet = spawnBullet()
  }
  if(keyCode === 75){
      var temporaryBullet1 = spawnBullet1()
  }
  
  
  }
   player1.collide(edges[3])
   player2.collide(edges[3])
   player1.collide(edges[2])
   player2.collide(edges[2])

   if(bulletsGroup.isTouching(player2)){
     player2.scale = player2.scale-0.0005
     

     

   }

   if(bulletsGroup1.isTouching(player1)){
     player1.scale = player1.scale-0.0005
    
   }
    
  
  

   if(player2.scale < 0.07){
     gameState = "end"
   }

   if(player1.scale < 0.07){
     gameState = "end"
   }
  }
   if(gameState === "end"){
     textSize(40)
     text("Game Over", 550, 250.5)
     if(player1.scale > player2.scale){
   textSize(15)
      text("player 1 wins", 610, 270.5)
      text("press 'R' to restart", 595,290)
     }

      if(player2.scale > player1.scale){

        textSize(15)
        text("player 2 wins", 610, 270.5)
        text("press 'R' to restart", 595, 290)


      }

   

   
   }
   
   if(keyDown("r")){
     gameState = "play"
     player1.scale = 0.3
     player2.scale = 0.3
   }

  drawSprites()

  }

  function spawnBullet(){
    var bullet = createSprite(90,player1.y-12,5,5)
    bullet.addImage(bullet1img)
    bullet.scale = 0.01
    bullet.velocityX = 15
    bulletsGroup.add(bullet)
    return bullet;
  }
    function spawnBullet1(){
    var bullet1 = createSprite(1270,player2.y-12,5,5)
    bullet1.addImage(bullet1img)
    bullet1.scale = 0.01
    bullet1.velocityX = -15
     bulletsGroup1.add(bullet1)
    return bullet1;
    }

  
  
  
  

  

  





