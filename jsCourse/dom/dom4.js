// event buubling
// event capturing
// propagation
const btn = document.querySelector(".child");
const btn1 = document.querySelector(".parent");
const btn2 = document.querySelector(".grandParent");


// not capturing event 
// if you click any child button first child button will run then its parent button will trigger automatically  
// btn.addEventListener("click", function(){
//     console.log(this);
// })
// btn1.addEventListener("click", function(){
//     console.log(this);
// })
// btn2.addEventListener("click", function(){
//     console.log(this);
// })
// capturing event  
// now if you click any child button first parent button will run then then child button will trigger automatically  
// btn.addEventListener("click", function(){
//     console.log(this);
// },true)
// btn1.addEventListener("click", function(){
//     console.log(this);
// },true)
// btn2.addEventListener("click", function(){
//     console.log(this);
// },true)

// event delegation 
// in event delegation we make a event listner for parent and we can run event from any child box 
btn2.addEventListener("click", function(){
    console.log(this);
})