let snake;
let rez=20;
let w;
let h;
let food;

function setup(){
    createCanvas(600,600);
   
    w=width/rez;
    h=height/rez;
    frameRate(5);
    snake=new Snake(0,0);
    foodLocation();

}
function keyPressed(){
    if(keyCode===LEFT_ARROW){
        snake.setDir(-1,0);
    }
    else if (keyCode===RIGHT_ARROW){
        snake.setDir(1,0);
    }
    else if (keyCode===DOWN_ARROW){
        snake.setDir(0,1);
    }
    else if (keyCode===UP_ARROW){
        snake.setDir(0,-1);
    }
}
function foodLocation(){
    
    let x=floor(random(w));
    let y=floor(random(h));
    food=createVector(x,y)


}
function draw(){
    scale(rez);
    background(0);
    if(snake.eat(food)){
        foodLocation();
    }
    if(snake.endGame()){
        print("ENG GAME");
        background(255,0,0);
        noLoop();


    }
    snake.update();
    snake.show();
    noStroke();
    fill(255,0,0);
    rect(food.x,food.y,1,1);
    

}