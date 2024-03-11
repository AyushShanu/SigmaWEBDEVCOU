console.log("ayush os the developer")
console.log("ayush is the java developer")


setTimeout(() => {
    console.log("hy i am inside the the setTime inetrval")
}, 1000);

console.log("the End")
const callback = (arg) => {
    console.log(arg)
}

const loadScript = (scr, callback) => {
    let sc = document.createElement("script")
    sc.src = scr;
    sc.onload = callback("ayush")
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
