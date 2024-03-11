// let a=document.getElementsByClassName("box")

// console.log(a)

// a[2].style.backgroundColor="red"

// document.getElementById("red").style.backgroundColor="blue"

// document.querySelector(".box").style.backgroundColor="brown"

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="cyan"
})

