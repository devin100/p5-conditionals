var x = 0;
var speed = 30;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
    
    // i wrote theis so background changes to pink when clicked
    if(mouseIsPressed){
        background(255,0,200);
    }
    
    //makes background white, 6px thick no color inside shapes
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(0,255,0)
    }
    else{
    noFill();
    }
    
    
    //a circle
    ellipse(x,200,100,100);
    
    //this code is going to get the mouse to move on its own
    if(x>width || x<0){
    console.log("circle is off the screen")
    speed = speed *-1;
    }

    x = x + speed;
    console.log(x);
    }