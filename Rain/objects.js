function  drop(x,y,len,z){
    this.x=x;
    this.y=y;
    this.len=map(z,0,20,5,10);
    this.speed=map(z,0,20,2,5);
    this.depth=map(z,0,20,50,255)
    this.g=map(z,0,20,0.2,0.8)
    this.draw=()=>{
        if(this.y>0){
            stroke(this.depth)
            strokeWeight(2)
            line(this.x,this.y,this.x,this.y+this.len)
        }
        
    }
    this.update=()=>{
        if(this.y<0){
            this.y+=this.speed;
            //console.log(this.y);
            
        }
        if(this.y>0 && this.y<innerHeight){
            this.speed+=this.g;
            this.y+=this.speed;
            
        }
        else{
            this.speed=map(z,0,25,1,4);
            this.y=random(-100,0);
            this.x=random(0,innerWidth)
        }
        this.draw();
    }
}
function  cloud(x,y,rad){
    this.x=x;
    this.y=y;
    this.rad=rad;
    this.speed=0.5;
    this.draw=()=>{
        if(this.x>0){
            fill("rgba(230,230,230,0.9)")
            noStroke()
            circle(this.x,this.y,this.rad)
        }
            
        
    }
    this.update=()=>{
        
        if(this.x<innerWidth){
            this.x+=this.speed;
            
        }
        else{
            this.speed=0.5;
            this.x=0;
            this.y=random(0,100);
            this.rad=random(150,200);
        }
        this.draw();
    }
}