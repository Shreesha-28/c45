var characterImage,monsterImage,villainImage;
var character,monster,villain;

function preload(){
  characterImage=loadImage("character.jpg");
  monsterImage=loadImage("monster.png");
  villainImage=loadImage("villain.png");
  aimImage=loadImage("aim.png");
}
function setup() {
  createCanvas(800,400);
  character=createSprite(400,350,10,10);
  character.addImage(characterImage);

  aim=createSprite(100,40,10,10);
  aim.addImage(aimImage);
  aim.scale=0.1;
  bullet=createSprite(12000,800);

}

function draw() {
  background(255,255,255);

  aim.x=character.x+140;
  aim.y=character.y-25;
  if(keyDown("space")){
    bullet=createSprite(10,10,10,50);
    bullet.x=aim.x;
    bullet.y=aim.y;
    bullet.velocityX=2;
    bullet.velocityY=-2;
    bullet.shapeColor="red";
  }
  if(keyDown("a")){
    character.x=character.x-2;

  }
  if(keyDown("d")){
    character.x=character.x+2;

  }
  if(keyDown("s")){
    character.y=character.y+2;

  }
  if(keyDown("w")){
    character.y=character.y-2;


  }
  spawnVillains();
  drawSprites();
}
function spawnVillains() {
  if(frameCount % 10 === 0) {
    var villain = createSprite(400,0,10,40);
    villain.velocityY = +1;
  villain.x=Math.round(random(400,750));
villain.addImage(villainImage);
   
    
    //assign scale and lifetime to the obstacle           
    villain.scale = 0.1;
    
    //add each obstacle to the group
    
  }
}