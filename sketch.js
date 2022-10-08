var Ball, database;
var position;
var BallPosition;

function setup(){
  database = firebase.database();

  console.log(database);
  createCanvas(windowWidth,windowHeight);

  Ball = createSprite(250,250,40,40);
  Ball.shapeColor = "red";
  
  BallPosition = database.ref("ball/position");
  BallPosition.on("value",readPosition);

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-6,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(6,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-6);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+6);
    }
    drawSprites();
  
}

function writePosition(x,y){
  BallPosition.set({
    "x" : position.x + x,
    "y" : position.y + y  
  })
 
}

function readPosition(data){
  position = data.val()
  Ball.x = position.x;
  Ball.y = position.y;
 
}

function showError(){
}
