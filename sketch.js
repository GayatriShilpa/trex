var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var jumpsound, diesound, checkpointsound;
var cloud, cloudsGroup, cloudImage;
var obstacle1_image;
var obstacle2_image;
var obstacle3_image;
var obstacle4_image;
var obstacle5_image;
var obstacle6_image;
var cloudsGroup, obstaclesGroup;
var newImage;
var gamestate;
var score = 0;
var gameover, game_over;
var game_restart, restart;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  groundImage = loadImage("ground2.png");

  jumpsound = loadSound("jump.mp3");


}

function setup() {
  createCanvas(1500,400);

  trex = createSprite(0, 390, 20, 50);
 trex.addAnimation("running", trex_running);
  trex.velocityX=4;
 

  ground = createSprite(0,390,1200*5,20);
  ground.addImage("ground", groundImage);
 // imageMode(CENTER);
 // image(groundImage,0,390,1200*5,20);
  ground.x =0;

  invisibleGround = createSprite(0,390,1200*5,10);
  invisibleGround.visible = false;

  console.log(width);

}

function draw() {
  background(180);
  console.log(trex.x,trex.y);
    
  trex.collide(ground);

  
  if(trex.x>1000){
    trex.velocityX=0;
    
  }

  camera.x=trex.x;
  camera.y=trex.y;

  drawSprites();
}
