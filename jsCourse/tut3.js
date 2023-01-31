// ***********************for of loop *******************************
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
// *********************** for looop ***********************
let array= [];
for(let i =0; i < fruits.length; i++){
    console.log(fruits[i].toUpperCase());
    array.push(fruits[i].toLowerCase());
}
console.log(array);
// ***********************for in loop***********************
for (const index in fruits) {
    console.log(fruits[index]);   
}
// we normally use const for array because we can do all
// the things like push pop etc using const but if we use let
// so we can empty the array by doing this 
// array = [];
// so use const 

// *********************** Array destructuring *********************** 
const arrray =["item1", "item 2", "item3", "item4"];
// let value1 = arrray[0];
// let value2 = arrray[1];
// console.log(value1);
// console.log(value2);
// we will not use the above method there is one easy method 
// we will use this 
// this ...myArray will take all the remaining values
//  from array 
let [value1, value2, ...myArray] = arrray;
console.log(value1);
console.log(value2);
console.log(myArray);
// for assigining value 1 and value 2 
// this will skip the value 2 
let [value3,  ,value4] = arrray;


// **************** OBJECT ***********************
const person =  {
    name : "Saad",
    age : 21,
    courses :["english", "math", "urdu"]
}
console.log(person);
// we have two method to access the key first method is using dot 
// e.g person.age 
// second method is using [] 
// this will access the name 
// dot 
console.log(person.name);
console.log(person.courses);
// adding key value pair to object  using dot operator
person.gender = "male";
console.log(person);
// bracket 
console.log(person["age"]);
// / adding key value pair to object  using bracket
person["address"] = "Lahore";

// which one is good dot or bracket 
// by using bracjet we can give the space btw key name 
// e.g
const p = {
    name : "saad",
    "Person hobbies" : "cricket"
}
console.log(p["Person hobbies"])
// we can't do this with dot operator see 
// console.log(p.Person hobbies)
let key = "email";
// now we want to add this key in object p 
// again we can't do this with dort operator 
// see 
p.key = "ducky9846@gmail.com";
// it is naming the key with key instead of email 
// we will use bracket operator for this 
p[key] = "saadaslam6866@gmail.com";
console.log(p);

// using loop in object 
// this will give us key name 
for (const key in person) {
    console.log(key);
}
// this will give us values in key 
for (const key in person) {
    console.log(person[key]);
}
for (const key in person) {
    console.log(key, ":" ,person[key]);
    console.log(`${key} : ${person[key]}`);
}

// Object.keys method 
// this will give us array of object key 
console.log(Object.keys(person));
for(let key of Object.keys(person)){
    console.log(person[key]);
}