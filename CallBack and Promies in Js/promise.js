console.log('this is promise')

let prom1= new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<.5){
        reject("the  ramdom number is not supporting us ")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done with the work")
            resolve("ayush")
        }, 2000);
    }
    
})

let prom2= new Promise((resolve,reject)=>{
    let a=Math.random()
    if(a<.5){
        reject("the  ramdom number is not supporting us 2")
    }
    else{
        setTimeout(() => {
            console.log("yes i am done with the work 2")
            resolve("ayush dhuliya")
        }, 1000);
    }
    
})

let p3=Promise.all([prom1,prom2])
p3.then((a)=>{
console.log(a)
}).catch((err)=>{
    console.log(err)
})