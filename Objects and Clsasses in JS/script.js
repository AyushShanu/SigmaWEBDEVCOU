// let obj={
//     a:1,
//     b:"Ayush"
// }

// console.log(obj)

// let animal={
//     eats:true
// };

// let rabbit={
//     jump:true
// };

// rabbit. _proto_  = animal ;

class Animal{
    constructor(name){
        this.name=name
console.log("object is created...")
    }
    eats(){
        console.log("kha rha hoon mai bi ")
    }
    jump(){
        console.log("i am jumping in the garden ")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name=name
console.log("object is created and this is a lion...")
    }
}

let a=new Animal("bunny");
console.log(a)

let l=new Lion("Shera")
console.log(l)