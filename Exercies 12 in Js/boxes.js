
let ramd=Math.random()
function getRamdomColor(){
    val1=Math.ceil(0+Math.random()*255);
    val2=Math.ceil(0+Math.random()*255);
    val3=Math.ceil(0+Math.random()*255);
    return `rgb(${val1} ${val2} ${val3})`
}
let a;
if(ramd < 0.33){
     a=document.querySelectorAll(".box").forEach(e=>{
        e.style.backgroundColor=getRamdomColor()
        e.style.color=getRamdomColor()
    }) 
}
else if(ramd < 0.66 && ramd > 0.33){
     a=document.querySelectorAll(".box").forEach(e=>{
        e.style.backgroundColor=getRamdomColor() 
        e.style.color=getRamdomColor()
    }) 
}
else{
     a=document.querySelectorAll(".box").forEach(e=>{
        e.style.backgroundColor=getRamdomColor()
        e.style.color=getRamdomColor() 
    }) 
}