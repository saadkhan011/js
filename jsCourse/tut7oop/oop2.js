// see this 
const aboutObject = {
    about(){
        console.log(this.firstname, this.age, this.address, this.email);
    },
    is18(){
        return this.age>18;
    }
}
function createObject(firstname, age, address, email){
    const obj = {};
    obj.firstname = firstname;
    obj.age = age;
    obj.address = address;
    obj.email = email;
    // now this is assigning the value every time when function call 
    // but it dont make a new value 
    obj.about = aboutObject.about;
    obj.is18 = aboutObject.is18;
    return obj;
}
const user1 = createObject("Talha", 23 , "Guldasht", "@gmail");
const user2 = createObject("Moeez", 129 , "Guldasht", "@moeezgmail");
user1.about();
user2.about();

// we can make this more accurate see oop3.js