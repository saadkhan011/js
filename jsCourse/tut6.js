// ***************************************Method******************************* 
// This keyword 
const person = {
    name : "Saad Aslam",
    age : 23,
    about : function(){
        // this keyword pointing to the object
        // see this it has complete person object  
        console.log(this);
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`)
    }
}
person.about();
function about(hobby){
    console.log(`My name is ${this.name} and age is ${this.age} and hobbby is ${hobby}`);
}
const person1 = {
    name : "Jawad",
    age : 26,
    personInfo : about
}
const person2 = {
    name : "Ahmad",
    age : 28,
    personInfo : about
}

person1.personInfo();
person2.personInfo();
// Call keyword 
person1.personInfo.call(person2, "Coding" );
// apply method is same but we just add things in array 
person1.personInfo.call(person2, ["Coding"] );
// bind method will return a function 
const myFunc = person1.personInfo.bind(person2);
myFunc();

// Dont do this mistake 
// we can call about like this 
person2.personInfo("cricket");
// but we can not store this in any other function see 
const myfun =  person2.personInfo;
myfun();
// if we want tos tor then we need to use bind method 
const myfun1 =  person2.personInfo.bind(person2);
myfun1();

// *************************this in arrow function 
// arrow function does not have this 
// arrow function take this from one level up 
const user = {
    age : 21,
    nam : "Omar",
    print : ()=>{
        // in this case this is window Object 
        console.log(this);
        console.log(this.age);
        console.log(this.nam);
    }
}
user.print();
// in object if we write a function we called it method 

