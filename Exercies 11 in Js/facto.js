// let num=prompt("Entre the fumber");
// let f=1;
// for(let i=1;i<=num;i++)
// {
//     f=f*i;
// }
// console.log(f);


let num = 6;
function facto(num) {
    let arr = Array.from(Array(num + 1).keys())
    console.log((arr.slice(1,)))
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })
    return c;
}
facto(num);