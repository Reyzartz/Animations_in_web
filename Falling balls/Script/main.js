var canvas =document.querySelector('canvas');

//Defining Width and Height
canvas.width=innerWidth;
canvas.height=innerHeight;
canvas.style.backgroundColor="#fff";
var ctx = canvas.getContext('2d');

//Declaring Variables
var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#2980B9'
]
var NoOfballs=200,
    gravity=.3,
    friction=0.98,
    x,y,dx,dy,radius,color,
    ballArray=[];

//Adding Events Listeners to update the page
window.addEventListener('resize',function(){
    canvas.width=innerWidth;
    canvas.height=innerHeight;
    init();
})
window.addEventListener('click',function(){
    init();
});
//Utility funtions
function RandomIntNumber(min,max){
    return (Math.floor(Math.random()*(max-min+1)+min));
}
function RandomColor(colors){
    return colors[Math.floor(Math.random()*colors.length)]
}
//Creating Ball Object to draw and update circles
function Ball(x,y,dx,dy,radius,color){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=color;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        ctx.fillStyle=this.color;
        ctx.stroke();
        ctx.fill();
        ctx.lineWidth="4";
    } 
    this.update=function(){
        if(this.y+this.radius+this.dy>=innerHeight){
            this.dy=-this.dy*friction;
            this.dx = this.dx *friction;
        }
        else
         {
             this.dy+=gravity;
         }
         if(this.x+this.radius+this.dx>=innerWidth ||
            this.x-this.radius<=0){
            this.dx=-this.dx*friction;
        }   
        this.x+=this.dx;   
        this.y+=this.dy;
        this.draw();
    }
}
//Creating using ball Object and storing them in an Array with Random value
function init(){
    ballArray=[];

    for(let i=0;i<NoOfballs;i++){
        radius=RandomIntNumber(10,25);
        x=RandomIntNumber(radius,innerWidth-radius);
        y=RandomIntNumber(radius,innerHeight-radius);
        dy=RandomIntNumber(-2,2);
        dx=RandomIntNumber(-2,2);
        color=RandomColor(colorArray);
        ballArray.push(new Ball(x,y,dx,dy,radius,color));
    }
}
//Calling Update to move the ball 
function aniamte(){
    requestAnimationFrame(aniamte)

    ctx.clearRect(0,0,innerWidth,innerHeight,true);

    for(let i=0;i<NoOfballs;i++){
        ballArray[i].update();
    }
}
init();
aniamte();