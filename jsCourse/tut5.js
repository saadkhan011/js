// array shortcut method 
// *********for each method 
// for each method will run the function one by one 
const array = ["Saad", "Jawad", "Ahmad", "Owais"];
array.forEach((string)=>{
    console.log(string);
})
// object example 
const obj = [
    {name:"Saad", id: 90, hobby: "Coding"},
    {name:"Ahmad", id: 50, hobby: "DropShipping"},
    {name:"Owais", id: 60, hobby: "Teaching"},
    {name:"Jawad", id: 79, hobby: "Coding"},
]
obj.forEach((obj)=>{
    console.log(obj.name);
    console.log(obj.id);
    console.log(obj.hobby);
})

// *********map method 
// map method will also run one by one but it will also return the array 
const array1 = [5,8,19,7,25];
let newarr = array1.map((num)=>{
    return num*-1;
})
console.log(newarr);
// object example 
const idarr = obj.map((obj)=>{
    return obj.id;
})
console.log(idarr);


// *********filter method
// it also run one by one and it also return the array but only those index which will be true 
let iseven = array1.filter(function(num){
    return num%2===0;
})
console.log(iseven);
let codingPerson = obj.filter((obj)=>{
    return obj.hobby === "Coding";
})
console.log(codingPerson);
// reduce method pass two value current and next and it return one value 
// reduce method 
let sum = array1.reduce((accumulator, current)=>{
    // console.log("acc"+accumulator);
    // console.log("curr"+current);
    return accumulator + current;
},10)
console.log(sum);
// object example 
let sumid = obj.reduce((obj, current)=>{
    return obj+current.id;
},1)
console.log(sumid);


// sort method change in the original array 
// *********sort method
array1.sort()
console.log(array1);
// this is sorting the value according to ascii value 
// see this example it is sorting the first index according to ascii value 
console.log(array.sort());
// But if we dont want to sort according to the ascii value 
array1.sort((a,b)=>{
    return a-b;
})
// for decending do b-a
console.log(array1);
const newobj = obj.slice(0).sort((a,b)=>{
    return a.id-b.id;
})
console.log(newobj);
// i used slice method to clone the array otherwise it will 
// change in the original array  



// find method will find the value and return that value 
// ********* find method 
let find = array.find(function(arr){
        return arr.length === 4;
})
console.log(find);
// object example 
let findid = obj.find((obj)=>{
    return obj.id===79;
})
console.log(findid);

// it return the value in boolean it check if all the Element of array is true or false  
// Every method 
let array2 = [2,3,8,10]; 
console.log(array2.every((arr)=>{
    return arr%2===0;
}))
// object example 
console.log(obj.every((obj)=>{
    return obj.id>30;
}))
// it return the value in boolean it check if any of the Element of array is true or false
// Some method 
console.log(array2.some((num)=>{
    return num%2===0
}))

// fill methhod 
let arr =  new Array(10).fill(0);
console.log(arr);
// value , start , end 
arr.fill(3,3,6);
console.log(arr);
// fill method is used to add same values 

// splice method 
console.log(array2);
// deleted item ,  how many items, insert 
array2.splice(0,2, 4,6);
console.log(array2);

// iterable :
// jispe hum for of laga sakete ho us ko iterable kehte ha 
// e.g array , string
// array like object ;
// jinke pas length property lag sakte ho us ko hum array like object kehte ha 

// ************************** Sets ***********************
// it is iterable 
// store data 
// no index based access 
// order is not guaranteed 
// unique items only (no duplicate data)
let setitems = new Set([5,2,3]);
setitems.add("Saad");
setitems.delete("Saad")
// setitems.clear();
console.log(setitems.size);
console.log(setitems.entries());
console.log(setitems);
if(setitems.has(1)){
    console.log("set has item");
}
else{
    console.log("set does not have item");
}
let length=0;
for (const item of setitems) {
    length++;
}
console.log(length);
// as we know it only store unique elements 
// so lets see a example 
let array3 = [1,2,2,3,4,5,2,1,5];
const setarr = new Set(array3);
console.log(setarr);
setitems.add(["item1","item2"]);
setitems.add(["item1","item2"]);
// both values have different address because these are array so set will add both of them,
console.log(setitems);

// ********************Map*******************
let mapObj = new Map();
mapObj.set("FirstName", "Saad");
mapObj.set("age", 23);
mapObj.set(1,"one")

console.log(mapObj.get("age"));
console.log(mapObj.get(1));
for (const [key,value] of mapObj) {
    console.log(key);
    console.log(value);
}
let mapObj1  = new Map([["Name","Saad"],["age", "21"]]);
console.log(mapObj1);
const person1 = {
    name: "Saad",
    age:21
}
const extraInfo = new Map([[person1, {gender: "male"}]]);
// extraInfo.set(person1, {gender: "male"});
console.log(extraInfo);
console.log(extraInfo.get(person1).gender);
console.log(person1);

// ********optional chaining 
const info = {
    name : "Saad",
    Location: {city : "Lahore"}
}
console.log(info.name);
console.log(info.gender);
// this line will give us the error if city is not present in the object 
console.log(info.Location.city);
// but if we use this it will give us undefined if it is not present in object 
console.log(info?.Location?.city);