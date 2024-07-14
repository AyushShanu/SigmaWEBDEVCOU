(function(){

const buttons = document.querySelectorAll(".btn")
let count = 0;
const counter = document.querySelector(".cm");
const countercontainer = document.querySelector(".counter")

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      if (button.classList.contains("add")) {
        count++;
      } else if (button.classList.contains("sub")) {
        count--;
      }
      counter.textContent = count;
      if(count>0){
        countercontainer.classList.remove("negative")
        countercontainer.classList.add("postive")
      }else if(count<0){
        countercontainer.classList.remove("postive")
        countercontainer.classList.add("negative")
      }else{
        countercontainer.classList.remove("postive","negative")
      }
})
});
})();