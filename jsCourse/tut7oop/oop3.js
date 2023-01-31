
const aboutObject = {
    about(){
        console.log(this.firstname, this.age, this.address, this.email);
    },
    is18(){
        return this.age>18;
    }
}
// we can make this more accurate see this 
function createObject3(firstname, age, address, email){
    const obj = Object.create(aboutObject);
    // by using create method we dont need to call abput method function in thhis object 
    obj.firstname = firstname;
    obj.age = age;
    obj.address = address;
    obj.email = email;
    return obj;
}
user1 = createObject3("Talha", 23 , "Guldasht", "@gmail");
user2 = createObject3("Moeez", 1 , "Guldasht", "@moeezgmail");
user1.about();
user2.about();
console.log(user1.is18());


// Create keyword 
const objj= {
    key1 : "value1",
    key2: "value2"
}
// by using create keyword we are making a newobj 
// which will also access the value of objj 
const newObj = Object.create(objj);
newObj.key3 = "value3";
console.log(newObj);
console.log(newObj.key2);
// this is we called __proto__ or [[prototype]] 
// but prototype is different 
console.log(newObj.__proto__);

// see oop4.js  