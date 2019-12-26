export default class Circle{
    constructor(x,y,radius,xSpeed,ySpeed){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.xSpeed=xSpeed;
        this.ySpeed=ySpeed;
    }
    draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,radius,0,Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle="rgba(255,255,255,.5)";
    }
    update=function(){
        if(this.x+this.radius>innerWidth || this.x-this.radius<0)
            this.xSpeed=-this.xSpeed;
        if(this.y+this.radius>innerHeight || this.y-this.radius<0)
            this.ySpeed=-this.ySpeed;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
        this.draw();
    }
}