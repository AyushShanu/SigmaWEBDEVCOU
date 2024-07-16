function genrateRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min*1)+min)
}
document.getElementById("genrator").addEventListener("click",function(){
    var min = 1;
    max = 100;

    var randomNumbetr = genrateRandomNumber(min,max);

    document.getElementById("result").textContent = randomNumbetr;
})