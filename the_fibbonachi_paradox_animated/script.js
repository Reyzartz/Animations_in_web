function setup() {
    createCanvas(innerWidth,innerHeight)
    background(0)
    angleMode(DEGREES) 
    ellipseMode(CORNER) 
    lmt=width/2+100;
    frameRate(30)
    add_ele()
    
}
let len=1.01,deg=0,r=222.49223595,lmt;

function Point(x,y){
  this.x=x
  this.y=y
  this.draw=()=>{
    if(clr==="rgb"){
      fill(255-map(this.x,0,lmt,0,255),200,200)
    }
    else if(clr==="b&w"){
      fill(map(this.x,0,lmt,0,255))
    }
    if(stk){
      if(clr==="rgb")
        stroke(255-map(this.x,0,lmt,0,255),200,200)
      else if(clr==="b&w")
        stroke(255-map(this.x,0,lmt,0,255))
    }
    if(shape==="circle")
      circle(this.x,this.y,this.x)
    else if(shape==="square")
      rect(this.x,this.y,this.x,this.x)
    else if(shape==="ellipse")
      ellipse(this.x,this.y,this.x,this.x/6)
    else if(shape==="arc")
      arc(this.x,this.y,this.x,this.x,0,30)
    else if(shape==="line"){
      strokeWeight(sqrt(this.x)*0.8)
      line(this.x,this.y,this.x,this.x)
    }
    else if(shape==="point"){
      strokeWeight(sqrt(this.x)*0.7)
      point(this.x,this.y)
    }
  }
  this.update=()=>
  {
    this.draw()
    this.x*=len
    if(this.x>=lmt){
      this.x=1
    }
  }
}
let p=[]
function draw(){
  background(0)
  translate(width/2,height/2)
  if(len!==freq)
    add_ele()
    len=freq
  
  if(!stk){
    noStroke()
  }

  if(clr==="rgb"){
    colorMode(HSB)
  }
  else if(clr==="b&w"){
    colorMode(RGB)
  }
  p.forEach( e => {
    
    //push()
    //rotate(deg)
    rotate(r)
    if(deg >= 360){
      deg-=360
    }
      deg+=r
    e.update()
    //pop()
  })
}

function add_ele(){
  p=[]
  let x=1,deg=0
  while(x<=lmt){
    p.push(new Point(x,0))
    if(deg>=360){
      deg=0
      x*=len
    }
    deg+=r
  }
  //p=p.slice(99,500)
  console.log(p);
}