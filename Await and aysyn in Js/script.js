// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 4000);
//     })
// }

async function getdata() {
    let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data= await x.json()
    console.log(data)
}

async function main(){

console.log("loading modules")

console.log("Do somethinh else")

console.log("load Data")
let data = await getdata()
console.log(data)
// console.log(data)
// data.then((v) => {
//     console.log("process data")
//     console.log("task2")
// })


console.log("process data")
    console.log("task2")

    console.log("process data 2")
    console.log("task3")
}
main()