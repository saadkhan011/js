// "use strict";

// const array = [];
// var size = 5
// for(let i =0; i<size; i++){
//     array[i] = prompt("enter the array");

// }
// console.log(array);
// console.log(Array.isArray(array));

// 2
function cloneArray(array){
    const newArr = [...array];
    return newArr;
}

const array = [2,3,"Saad"];
console.log(cloneArray(array));
console.log(cloneArray([1, 2, 4, 0]));
console.log(cloneArray([1, 2, [4, 0]]));

// 3
const first= (array,n)=>{
    var len = array.length;
    if(array==null){
        return 0;
    }
    if(n==null){
        return array[len-1];
    }
    if(n<0){
        return [];
    }
    if(n<len){
        let c = len-n;
        return array.slice(c);
    }
    return array.slice(0);
    console.log(c);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// 4
const arr1 = ["Saad", "jawad", "Ahmad"];
let string = arr1.toString();
console.log(string); 
console.log(arr1.join('+'));
console.log(arr1.join());


//5
// var num = 24346784;
// let string3 =num.toString();
// const da= [];
// let count =0;
// for(let i =0 ; i < string3.length-1; i++){
//     if(string3[i]%2==0 && string3[i+1]%2==0){
//         da[count] = i+1;
//         count++;
//     }
// }
// var newnum = [];
// let k =0;
// for(let i =0; i < string3.length; i++){
//     for(let j =0; j<count; j++){
//         if(i==da[j]){
//             newnum[k] = "-";
//             k++;
//         }
//     }
//     newnum[k] = string3[i];
//     k++;
// }
// console.log(newnum);
// console.log(da);


// 7
const arrr = [2,1,-3,4,2,7];
console.log(arrr.sort());


// 8
let freArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count =0;
max =0;
var item;
for(let i=0; i < freArray.length; i++){
    for(j=i; j<freArray.length; j++){
        if(freArray[i]===freArray[j]){
            count++;
        } 
        if(max<count){
            max = count;
            item = freArray[i];
        }
    }
    count =0;
}
console.log(max);
console.log(item);

// 9
let string1 = "tHE qUICK bROWN fOX";
var res =[];
for(let i =0; i<string1.length; i++){
    if(string1[i].charCodeAt(0)>=65 && string1[i].charCodeAt(0)<=90){
        res.push(string1[i].toLowerCase());
        
    }
    else if(string1[i].charCodeAt(0)>=97 && string1[i].charCodeAt(0)<=122){
        res.push(string1[i].toUpperCase());
        
    }
}

console.log(res.join(''));

//10
const arr =[[1,2,3], [2,4,5],[5,7,8]];
for(let i =0; i<arr.length; i++){
    console.log("Row", i+1);
        for(let j =0; j<arr[i].length; j++){
            console.log(arr[i][j]);
        }
}
// 11
var numeric = [0,1,2,3,4];
var square = [];
for (const num of numeric) {
    square.push(num**2);
}
let sum = 0 ;
for (const num of square) {
    sum = sum + num;
}
console.log(numeric);
console.log(square);
console.log(sum);

// 12
let obj = {};
const arrrr= [1,2,3,4,4,5,4,3,7,7];
const newar = [];
for(let i =0; i<arrrr.length; i++){
    obj[arrrr[i]] = 0;
}
console.log(obj);
for (const key in obj) {
    newar.push(key);
}
console.log(newar);

//13
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th","st","nd","rd"];
for(let i =0; i < color.length; i++){
    if(i===0){
        console.log(`${i+1}${o[i+1]} choice is :${color[i]} `);
    }
    else if(i===1){
        console.log(`${i+1}${o[i+1]} choice is :${color[i]} `);
    }
    else if(i===2){
        console.log(`${i+1}${o[i+1]} choice is :${color[i]} `);
    }
    else 
        console.log(`${i+1}${o[0]} choice is :${color[i]} `);

}
const numm = [1,2,3,4];
for (let i =0; i< numm.length; i++){
    numm[i] = numm[i]*2;
}
console.log(numm);


// Object practise 
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
console.log(student.name, student.sclass, student.rollno);
console.log(student);
delete student["rollno"];
console.log(student);
let size = 0;
for (const key in student) {
    size++;
}
console.log(size);
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
}];
library.forEach(print);
let [user1,user2,user3] = library;
function print(user){
        console.log(user.author);
        console.log(user.title);
        console.log(user.readingStatus);
}
// print(user1);
// print(user2);
// print(user3);
for(let i =0; i<library.length;i++){
    console.log(library[i].author);
    console.log(library[i].title);
    console.log(library[i].readingStatus);
}
// Bubble sorting 
const arrayy = [6,4,0, 3,-2,1];
for(let i =arrayy.length-1; i>=0; i--){
    for(let j = i-1; j>=0; j--){
        if(arrayy[i]<arrayy[j]){
            let temp;
            temp = arrayy[j];
            arrayy[j]=arrayy[i];
            arrayy[i] =temp;
        }

    }
}
console.log(arrayy);
let subset = "dog";
// ["d", "do", "dog", "o", "og", "g"]
for(let i =0; i < subset.length; i++){

}
