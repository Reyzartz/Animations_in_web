let dis_nav=false
let stk=false
let clr="b&w"
let shape="circle"
let freq=1.01;
const display_nav=()=>{
    let nav=document.querySelector("nav")
    let btn_div=document.getElementsByClassName("btn_div")
    if(dis_nav){
        nav.style.transform="translateY(0%)"
        
        btn_div[0].style.transform="rotateZ(47deg)"
        btn_div[1].style.transform="translateY(500%)"
        btn_div[2].style.transform="rotateZ(-40deg)"
    }
        
    else{
        nav.style.transform="translateY(-100%)"
        
        
        btn_div[0].style.transform="rotateZ(0deg)"
        btn_div[1].style.transform="translateY(0%)"
        btn_div[2].style.transform="rotateZ(0deg)"
    }
        

    dis_nav=!dis_nav 
              
}

const change_shape=(shp)=>{
    shape=shp
    if(shp=="line" || shp==="point")
        stk=true
    else
        stk=false
}
const change_color=(_clr)=>{
    clr=_clr
}
const change_frequency=(_freq)=>{
    freq=map(_freq.target.value,0,100,1,1.1)
    
}
console.log("in");
