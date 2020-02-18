function setup() {
    createCanvas(innerWidth,innerHeight)
    len=8
    background(0)
    //noLoop()
    //noFill()
}
let x=0,y=0,len,ax=0
function draw() {
  stroke(80)
  strokeWeight(2)
  for(let i=0;i<=width/len;i++){
    if(random(1)>0.5){
      line(x,y,x+len,y+len)
    }
    else{
      line(x,y+len,x+len,y)
    }
    if(x<=width)
      x+=len
    else{
      x=0
      y+=len
    }
    if(y>=height){
      noLoop()
    }
  }
  
}