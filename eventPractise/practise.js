const btn = document.querySelector("button");
btn.addEventListener("click", function(){
let random1 = Math.random()*256;
random1 = Math.floor(random1)+1;
let random2 = Math.random()*256;
random2 = Math.floor(random2)+1;
let random3 = Math.random()*256;
random3 = Math.floor(random3)+1;
let rgb = `rgb(${random1}, ${random2}, ${random3})`;
    body = document.querySelector(".container");
    body.style.backgroundColor = rgb;
document.querySelector("span").innerHTML = rgb;
})