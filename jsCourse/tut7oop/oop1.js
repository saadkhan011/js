// ************ object oriented programming 

function createObject(firstname, age, address, email){
    const obj = {};
    obj.firstname = firstname;
    obj.age = age;
    obj.address = address;
    obj.email = email;
    obj.about = function(){
        console.log(this.firstname, this.age, this.address, this.email);
    }
    obj.is18= function(){
        return this.age>18;
    }
    return obj;
}
let user1 = createObject("Talha", 20 , "Guldasht", "@gmail");
let user2 = createObject("Moeez", 19 , "Guldasht", "@moeezgmail");
user1.about();
user2.about();
console.log(user1.is18());
// this method is wrong we need to use more accurate method because
// about and is18 function is making in every object we dont need
// to make it in every object 

// see the next file oop2.js 










// function also work like object 
// function ====> function + object
// see 
function person(){
    console.log("Saad");
} 
// function will provide us free object 
// and we called it prototype 
// only function provide prototype property 
console.log(person.prototype)
person.age = 18;
// so we can add this in above method 





