// this is for your game/web toy
var ball;
var ballImage;
var leftracket;
var rightracket;
var leftracketimg;
var rightracketimg;
var canvas = 

function preload() {
    ballImage = assests("assets/Pongball.jpeg");
    leftracketimg = assests("assests/pongleftracket.jpeg");
    rightracketimg = assests("assets/pongrightracket.jpeg");

}
function setup() {
  var canvas = document.getElementById('canvas');
    ball = new Sprite(50, 100);
    ball.addImage(ballImage);
    ball.vel.x = 5;
    leftracket = new Sprite(50, 100);
    leftracket.addImage(leftracketimg);
    rightracket = new Sprite(50, 100);
    rightracket.addImage(leftracketimg);

}

function draw() {
  
  background(0, 10);
   ball.vel.y += 0.5;
 if (ball.position.y > height - 40) {
    ball.vel.y = -20;
  }
  if (ball.position.x < 40) {
    ball.vel.x *= -1;
  }
 drawSprites();
}

