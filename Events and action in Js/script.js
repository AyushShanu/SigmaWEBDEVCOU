let btn=document.getElementById("btn")

btn.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML="<b> Yaaya you were clicked </b>"
})


btn.addEventListener("contextmenu",()=>{
  alert("Please click the rightr mouse button")
})
document.addEventListener("keydown",(e)=>{
  console.log(e,e.key)
})