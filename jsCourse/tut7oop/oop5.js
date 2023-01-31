function createObject(firstname, age, address, email){
    this.firstname = firstname;
    this.age = age;
    this.address = address;
    this.email = email;
}
createObject.prototype.about=function(){
    console.log(this.firstname, this.age, this.address, this.email);
}
createObject.prototype.is18= function(){
    return this.age>18;
}
let user1 = new createObject("Talha", 2 , "Guldasht", "@gmail");
user2 = new createObject("Moeez", 1 , "Guldasht", "@moeezgmail");
user1.about();
user2.about();
console.log(user1.is18());

// new keyword 
// make empty obj 
// return this  
// set proto to prototype