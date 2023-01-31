// events 
// there are three method to add event first is inline 
// the best method is this 
const btn = document.querySelector(".btn");
btn.addEventListener("click", function(){
    console.log("you clicked me");
    // value of this is button in function decleration 
    console.log(this);
})
// btn.addEventListener("click", ()=>{
//     console.log("you clicked me");
//     // value of this is window object in arrow function 
//     console.log(this);
// })
btn.addEventListener("click", function(event){
    console.log(event);
    console.log(event.target.textContent);
})


// **********keypressEvent*************
const body = document.body;
body.addEventListener("keypress", function(e){
    console.log(e.key);
})

// ***************mouseover event**************
btn.addEventListener("mouseover", function(){
    console.log("you hover me");
})

