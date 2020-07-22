var thickness,wall;
var speed,weight,bullet;

function setup(){
createCanvas(600,400);
speed = random(50,70);
weight = random(400,1500);
bullet = createSprite(50,200,100,2);
wall = createSprite(500,200,60,height/2);
bullet.velocityX = speed;
thickness = random(22,83);
}
function draw(){
background("black");

bullet.shapeColor = color(100,84,0);
 
if (hasCollided(bullet,wall)) {
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  bullet.velocityX = 0;

if (damage>10) {
  wall.shapeColor = color(255,0,0);
}
if (damage<10) {
  wall.shapeColor = color(46,100,48);
}
}

drawSprites();
}

function hasCollided(lbullet,lwall) {
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false;
}