var ball;
var database,position;
var canvas,backgroundImage,player,game,form;
var gameState=0;
var playerCount;

function setup(){
    

    canvas=createCanvas(400,400);

    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
   // background("white");
    
}

/*function writePosition(x,y){
    database.ref('ball/position').set({
x:ball.x+x,
y:ball.y+y,
    })
    
}

function readPosition(data){
    position=data.val();
ball.x=position.x;
ball.y=position.y;
}

function showError(){
    console.log("error");
}*/

