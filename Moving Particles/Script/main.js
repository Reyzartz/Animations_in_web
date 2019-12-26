let canvas =document.querySelector('canvas');

//Defining Width and Height
canvas.width=innerWidth;
canvas.height=innerHeight;
canvas.style.backgroundColor="#000";
const ctx = canvas.getContext('2d');

let radius,x,y,xSpeed,ySpeed,maxRadius=50,NoOfParticle=innerWidth/2;
let mouse={
    x:undefined,
    y:undefined
}
let colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#2980B9'
]
window.addEventListener('mousemove',
    function(event){
        mouse.x=event.offsetX;
        mouse.y=event.offsetY;
    });
window.addEventListener('resize',function(){
    canvas.width=innerWidth;
    canvas.height=innerHeight;
    init();
})

//Creating Circle Object to create a circles
function Circle(x,y,radius,xSpeed,ySpeed,color){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.xSpeed=xSpeed;
    this.ySpeed=ySpeed;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,radius,0,Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle=this.color;
    }
    
    this.update=function(){
        if(this.x+this.radius>innerWidth || this.x-this.radius<0)
            
            this.xSpeed=-this.xSpeed;
        
        if(this.y+this.radius>innerHeight || this.y-this.radius<0)
            
            this.ySpeed=-this.ySpeed;
        
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
        
        if(this.x-mouse.x<maxRadius && this.x-mouse.x>-maxRadius
            && this.y-mouse.y<maxRadius && this.y-mouse.y>-maxRadius){
            
            radius<maxRadius? radius+=1:radius=maxRadius;
        }
        else

           radius>this.radius? radius-=1:radius=this.radius;
            
        this.draw();
    }
}

//Creating using Circle Object and storing them in an Array with Random value
let circleArray=[];
function init(){
    circleArray =[];
for(let i=0;i<NoOfParticle;i++){
        radius=Math.floor(Math.random()*4)+1;
        x=Math.random()*(innerWidth-radius*2)+radius,
        y=Math.random()*(innerHeight-radius*2)+radius,
        xSpeed= (Math.random()-0.5)*2,
        ySpeed=(Math.random()-0.5)*2;
        circleArray.push(new Circle(x,y,radius,xSpeed,ySpeed,false));
    }
aniamte();
}
//Calling function to Update the position of the Circles 
function aniamte(){
    requestAnimationFrame(aniamte)
    ctx.clearRect(0,0,innerWidth,innerHeight,true);
    for(let i=0;i<circleArray.length;i++)
        circleArray[i].update();
}
init();