function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
 
img="";

function preload(){
img=loadImage('background-2.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("GALLERY",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,50,330,150);
}