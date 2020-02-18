function setup() {
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES);
    stroke(255);
    background(10);
    //frameRate(30);
}
let x1,x2,x3,y1,y2,y3,len=1,an=0,t=0;
function draw() {
  translate(width/2,height/2);
  //rotate(an);
  fill(0,10);
  rect(-width/2,-height/2,width,height);
  
 
  
  
  x1 =  len* cos(an+0);
  x2 =  len* cos(an+120);
  x3 =  len* cos(an+240);
  y1 =  len* sin(an+0);
  y2 =  len* sin(an+120);
  y3 =  len* sin(an+240);
  noFill();
  triangle(x1,y1,x2,y2,x3,y3);
  len+=sin(t);
  t+=0.5;
  an+=2;
}