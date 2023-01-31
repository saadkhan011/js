// computed properties 
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myValue2";
const p = {

}
p[key1] = value1;
p[key2] = value2;
console.log(p);
// we have one more method 
const t = {
    [key1] : value1,
    [key2] : value2
} 
console.log(t);

// spread operator in array
const array = [1,2,3];
const array1 = [4,5,6];
const newArray = [...array, ...array1];
const arr = [..."abc"];
console.log(newArray);
console.log(arr);
// spread operator in objevt 
const obj ={
    key1 : "value1",
    key2 : "value2",
}
const obj2 = {
    key1  : "unique Value",
    key3 : "value3",
    key4 : "value4"
}
// when we have two key with same name it will take that key which is coming after 
const newobj = { ...obj2,...obj, newKey :"newValue"};
console.log(newobj);
const newObject = {..."abc"};
console.log(newObject);

//*******************/ Object destructuring****************** 
const band = {
    bandName : "youngstaener",
    famousSong : "Naina tere",
    year : "2000",
    OtherSong : "Adhori Khani"
}
const name = band.bandName;
const song = band.famousSong;
// Easy and shortcut method method for this 
// const {bandName, famousSong} = band;
// console.log(bandName, famousSong);
// if we dont want exact name then do this 
const {bandName : Name, famousSong : Song, ...rest} = band;
console.log(Name, Song, rest);

//  ************************ object inside array ************************** 
const User = [
    {userId : "0090", FirstName : "Saad", Gender : "m" },
    {userId : "0040", FirstName : "Shahena", Gender : "F" },
    {userId : "0079", FirstName : "Usman", Gender : "m" }
]
console.log (User);
for (const key of User) {
    console.log(key);
    console.log(key.userId);
    console.log(key.FirstName);
}

// ******************* Nested Destructuring **************** 
const [user1, user2, user3]=  User;
// user1 will give us complete object 
console.log(user1);
let [{FirstName, Gender}, , {userId}] =  User;
console.log(FirstName, userId, Gender);

// ******************************************** Functions ************************************************
// function decleration 
function sum(a , b){
    let sum = a+b;
    return sum;
}+
console.log(sum(2,4));
// arrow function 
const mul = (a ,b)=>{
    let mul = a*b;
    return mul;
}
// When we have only one value in argument We can also write in this way
const isEven = (number)=> number%2===0;
console.log(isEven(3)); 
console.log(mul(3,5));

// function expression 
const subtract =  function(a, b){
    let sub = a-b;
    return sub;
}
console.log(subtract(2,7));

// Hoisting
hello();
function hello()
{
    console.log("hello world");
} 
// in javascript we can acess the function if we call the function before defining    
// But just with function decleration 
// see 
// printHello();
// var printHello = function(){
//     console.log("hello world");
// }
// function inside function 
function sum(num1 , num2){
    function subtract(num1, num2){
        return num1-num2;
    }
    console.log(subtract(3,5));
    return num1+num2;
}
console.log(sum(2,3));
// lexical scope 
// Java script is lexical scope because it is accessing the variable from outside the function 
// first javascript check that whether the variable is present in the scope or not
// if it is not present in the scope then js check outside the scope that scope we called lesical scope 

var value3 = 4;
const lexScope = function(){
    console.log(value3);
}
lexScope();

// Block sope vs function scope 
// let and const are block scope 
// block scope are those which we can only acess in thier block e.g
{
    let access = "you can't access this from outside of this scope";
}
// console.log(access);
// Var is function scope 
// Function scope are those which we can access from outside of their scope e.g 
{
    var access = "We can access this outsideof the scope ";
}
console.log(access);
// default parameter
function defaultValue(a, b =0){
    return a+b;
} 
console.log(defaultValue(3));

// rest parameter 
function myFun(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(c);
}
myFun(2,3,5,7,7,8);
function sumArray(...array){
    let sum = 0;
    console.log(array.length);
    for (let i =0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum);
}
sumArray(4,5,4);

// parameter destructuring 
const Person = {
    name: "Saad",
    age : 23,
}
function get(Person){
    console.log(Person.name);
    console.log(Person.age);
}
get(Person);
// Other method 
function getAgain({name, age, gender}){
    console.log(name);
    console.log(age);
    console.log(gender);
}
getAgain(Person);
// We can pass anythig in tghe parameter like object array string and function 
// CallBack function 
function PrintName(name){
    console.log(name);
}
function myFunc(callBack){
    console.log("Hello here I am a function");
    console.log(callBack);
    callBack("saad");
}
// if we aere p[assing funiction in the argument then it is call back function 
myFunc(PrintName);
// In this we are passing function as argument and using it in the
// my func 

// Return function 
function retFun(){
    function myFun2(){
        console.log("hello world");
    }
    return myFun2;
}
var print = retFun();
console.log(print);
print();
// we are returning function here and storing that in print now we can call print too
// because print is function too 

// *****************important array method*************************** 


// for each method **************
function myFun3(number, index){
    console.log(`number is ${number} index is ${index}`);
};
let array3 = [1,2,5,43];
for(let i= 0; i <array3.length; i++){
    myFun3(array3[i], i);
}
// we can do this with simple method 
// see 
array3.forEach(myFun3);
// we can also define function in for each e.g 
array3.forEach(function(number){
    console.log(number*2);
})
// but this function will be anonymus 

const users =[
    {name : "Saad"},
    {name : "jawad"},
    {name: "Ahmad"}
]
// users.forEach();
users.forEach(function(user){
    console.log(user.name);
});
// we can also do this with arrow function 
users.forEach((users, index) =>{
    console.log(users.name);
    console.log(index);

})

// map method **********
let array4 = [1,2,3,4];
let newArray1 = array4.map(num=>{
    return num*num;
})
console.log(newArray1);
// map method will give us all value in array 
let newUsers = users.map(function(u){
    return u.name;
})
console.log(newUsers);

// filter method ****************
let numbers = [2,3,4,6,7,9];
const iseven = function (num){
    return num%2===0;
}
let newNumber = numbers.filter(iseven);
console.log(newNumber);
// filter method will filter the value according to the condition 
// means it will check the condition if condition is true then it will return that 

// Reduce method ****************
let value = [2,3,4, 5]
function sumThis(accumulator, currentValue){
    return accumulator+currentValue;
}
let SumValue = value.reduce(sumThis);
console.log(SumValue);
// reduce metjod work like this 
// accumulator           currentValue           return 
    //  2                        3                   3
    //  3                        3                   5
    //  5                        4                   9 
    //  9                        5                   14

const customers = [
    {name : "Saad", product : "Mobile", price : 10},
    {name : "Saad", product : "Car", price : 20},
    {name : "Saad", product : "Watch", price :50},
]

let newValue = customers.reduce(function(totalPrice, CurrentValue){
    return totalPrice + CurrentValue.price; 
}, 10)
console.log(newValue);
// we can also set first value for the accumulator consider there is 10 rs in pice is tax see 


// for each method will pass the number and index of array in functioon
//  one by one like loop 
// map method will do the same thing but it will also return the array 
// filter method will also return the array but only those which will be true 
// reduce method give us one value 

