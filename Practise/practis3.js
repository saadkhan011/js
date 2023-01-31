const array = ["Saad", "Jawad", "Ahmad", 4 ,"omar", "noman"];
let [firstname, , thirdname, ...rest]=array;
console.log(firstname);
console.log(thirdname, rest);
let obj = {
    name: "saad",
    age: 23,
    skills: ["javaScript", "c++", "Graphic Designing"]
}
obj.hobby = "Badminton";
obj.fname=firstname;
console.log(obj)
obj["age"] = 45;
console.log(obj["age"]);
let key = "sports";
let value = "football";
obj[key]= value;
obj.hobby="movie"; 
console.log(obj);
for (const key in obj) {
    console.log(obj[key]);   
}
const p ={
    [key] : value,
}
console.log(p);

let newobj = {...obj, ...p};
console.log(newobj);
let {name:fname, skills:s} = obj;
console.log(s);
let arrobj = [
    {name:"saad", age:23, hobby : "movie"},
    {name:"ahmad", age:25, hobby : "cricket"},
    {name:"jawad", age:26, hobby : "codding"},
]
console.log(arrobj);
let [user1, user2,user3] = arrobj;
console.log(user1);
let [{age:a, hobby:h}, ,{name :n}]= arrobj;
console.log(n,a, h);
function sum(a , ...rest){
    return rest;
}
console.log(sum(3, 4, 6, 8));
let objj = [
    { name: "Saad", age:23},
    { name: "Owais", age:23}
]
objj.forEach((element, index) => {
    console.log(element.age);
    console.log(element);
    console.log(index);

});
let names =["Saad", "jawad", "Ahmad"];
let age = [21,20,19,6];
let na = names.filter(function (nam){
    if(nam === "Saad"){
        return nam;
    }
})
console.log(na);
let num = age.reduce(function(previousValue, currentValue , previousindex, currentindex){
    console.log("previos"+previousValue);
    console.log(previousindex);
    console.log(currentValue);
    console.log(currentindex);
})