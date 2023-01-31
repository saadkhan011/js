// *****************LOOPS*****************
// while loop
// let input1 = +prompt("please enter the value");
// let i =0;
// while(i<=10){
//     console.log(i*input1);
//     i++;
// }
// for loop
let num6 = 5;
for(let i=num6-1; i>0; i--){
    num6 = num6*i;
}
console.log(num6);

// *****************Break and continue*****************
for(let i = 1; i <5; i++){
    if(i==3){
        break;
    }
    console.log(i);
}
for(let i = 1; i <5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}
// d0 while loop
let i =1;
do{
    console.log(i);
    i++;
}while(i==5)

//***************** Arrays*****************
// order coleection of Item
// array is refrence typre datatype
let fruit = ["mango", "orange", "banana"];
console.log(fruit);
console.log(fruit[1]);
// fruit[100] = "sss"
// console.log(fruit.length)
// console.log(fruit[20]);
// we can store any kind of data type in array
let mixed = ["saad", 1,2,3, undefined, null];
console.log(mixed); 
// Now lets change some elements from arrays
fruit[1] = "apple"; 
console.log(fruit);
let obj = {};
console.log(typeof obj);
// referecne data type is called object
console.log(typeof fruit);
// To check the object is array or not
console.log(Array.isArray(fruit));
console.log(Array.isArray(obj));


// push function add the Element to the end of array 
fruit.push("Strawberry");
console.log(fruit);
// pop function give us the last Element of array 
let get;
get = fruit.pop();
console.log(get);
// unshift function add the elemnt in the beginning of array 
fruit.unshift("grapes");
console.log(fruit);
// shift function get the first elemnt of array 
get = fruit.shift();
console.log(get);
// push and pop is fast as compared to shift and unshift 


// *****************premitive and refrence datatype*****************
// premitive datatype
let num1 = 4;
let num2 = num1;
console.log("value of num 1 is", num1);
console.log("value of num 2 is", num2);
num1++;
console.log("after incrementing num1");
console.log("value of num 1 is", num1);
console.log("value of num 2 is", num2);
// refrence datatype
let array1 =["item 1", "item 2"];
let array2;
array2 =array1;
console.log(array1);
console.log(array2);
array1.push("item 3");
console.log("after adding item 3");
console.log(array1);
console.log(array2);
// now see the difference in premitive and refrence datatype 
// when we change the value in num1 it does not effect on num2 but when 
// we make two array and add item in array1 it add in both arrays
// so that's why array is refrence type
// refrence datatype store in 

// *****************clone of two array***************** 
// for clonning the array we can not use this mehod 
// array4 = array3;
// because if we make change in one array it will effenct on both array 
let array3 = [1, "saad"];
// 1st method 
let array4 = array3.slice(0);
console.log(array3===array4);
// but if we make change in one array it will only effect on one array 
// let try 
// 1st method 
array3.push("item");
console.log(array3);
console.log(array4);
// we have one more method 
// 2nd method 
let array5 = [].concat(array3);
console.log(array5)
// one more method 
// 3rd method 
let array6 =[...array3];
console.log(array6);

// *****************cancatenation af two array ***************** 

let array7 = [1, "saad"];
// 1st method 

let array8 = array7.slice(0).concat(["hello", 1]);
// let array8 = array7.slice(0).concat([[1,2]]);
console.log(array7);
console.log(array8);
// we have one more method 
// 2nd method 
let array9 = [].concat(array7, ["hellol, a"]);
console.log(array9)
// one more method 
// 3rd method 
let array10 =[...array7, "saad", 2];
console.log(array10);
