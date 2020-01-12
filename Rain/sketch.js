let rain=[];
const g=0.03;
let noOfRainDrop=400;
let noOfCloud=(innerWidth*2)/100;
let clouds=[];
let speed=3

function setup() {
    createCanvas(innerWidth,innerHeight)

    init()
}

function draw() {
    background(20)
    for(let i=0;i<noOfRainDrop;i++){
        rain[i].update();
    }
    for(let i=0;i<noOfCloud;i++){
        clouds[i].update();
    }
    stroke(255)
    strokeWeight(100)
    noFill()
    rect(0,0,innerWidth,innerHeight)
}
function init(){
    for(let i=0;i<noOfRainDrop;i++){
        rain.push(new drop(random(innerWidth),random(-innerHeight,0),5,random(0,20)))
    }
    for(let i=0;i<noOfCloud;i++){
        clouds.push(new cloud(random(0,innerWidth),random(0,100),random(150,200)))
    }
}