// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class dog extends Animal{

// }
// let item = new dog("Puppy", 29);
// console.log(item)
// *******************************************
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class dog extends Animal {
    constructor(name, age, speed) {
        super(name, age,)
        this.speed = speed;
    }
}
item = new dog("Puppy", 29, 43);
console.log(item)