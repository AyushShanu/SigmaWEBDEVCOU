let arr=[1,2,3,4,7,67,8,4];
arr[0]=43;

// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[5])

console.log(arr.toString());

console.log(arr.join(" and "));

console.log(arr.pop()) // remove the last element of the array
console.log(arr)

console.log(arr.push(100)); // add the element in the array
console.log(arr);

console.log(arr.push("ayush"));
console.log(arr);

console.log(arr.shift()); // remove the first element of the array

console.log(arr.unshift("bro")); // add the element in the array
console.log(arr);

// shift h vo pop ka bhai h or jo unshift h vo push ka bhai h.

let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];

console.log(a1.concat(a2,a3)); // join  two or more arrays together

let a=[1,2,3,4,5]

console.log(a.splice(2,3)); // splice a piece of array and form the new array 