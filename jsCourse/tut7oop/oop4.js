function createObject(firstname, age, address, email){
    const obj = Object.create(createObject.prototype);
    // by using create method we dont need to call abput method function in thhis object 
    obj.firstname = firstname;
    obj.age = age;
    obj.address = address;
    obj.email = email;
    return obj;
}
createObject.prototype.about=function(){
    console.log(this.firstname, this.age, this.address, this.email);
}
createObject.prototype.is18= function(){
    return this.age>18;
}
let user1 = createObject("Talha", 2 , "Guldasht", "@gmail");
let user2 = createObject("Moeez", 1 , "Guldasht", "@moeezgmail");
user1.about();
user2.about();
console.log(user1.is18());