// select Element by id 
const get = document.getElementById("contact");
const get2 = document.getElementsByClassName("form-group");
console.log(get);
console.log(get2)
// it will return a object 
console.log(typeof(get));

// select Element by using querselector 
const get1 = document.querySelector("h1");
console.log(get1);
// in query selector we can use any type of html Element 
// but it will return only first value 
const get3 = document.querySelector(".form-group");
console.log(get3);
// it is returning just first value 
// to get all value usee All 
const get4 = document.querySelectorAll(".form-group");
console.log(get4);
// it is giving all atributes in nodelist 


// **************change text **************
// textContent will return the text 
console.log(get1.textContent);
get1.textContent = "Here is your plan";
console.log(get1.textContent);
// when something is display none in css and you are using text 
// content then it will return the complete text including none value 
// e.g 
console.log(document.querySelector(".header-txt").textContent);
// see it is returning hidden value that is hello world 
// to get just visible text use inner text 
console.log(document.querySelector(".header-txt").innerText);

const get5 = document.querySelector("header nav ul li");
console.log(get5);

// **********change css*************
const get6 = document.querySelector(".header-txt .btn");
console.log(get6);
console.log(get6.style);
get6.style.color = "orange";
get6.style.backgroundColor = "red";

// *************set and get attriibute *********** 
const get7 = document.querySelector("li a");
console.log(get7.getAttribute("href"));
get7.setAttribute("href", "https://tinddog.netlify.app/");
// now i am changing some css 
// ***********multiple element using queryselector All ***********
const get8 = document.querySelectorAll("li a"); /* return nodelist thst is array like object*/
// we can use for loop, for of loop and for each method 
console.log(get8);
for (const gets8 of get8) {
    gets8.style.textDecoration = "none";      
    gets8.style.color = "white";
}
for (let i = 0; i < get8.length; i++) {
    
    get8[i].style.textDecoration = "none";      
    get8[i].style.color = "grey";
}
get8.forEach(element => {
    element.style.textDecoration = "none";      
    element.style.color = "yellow";
});
// ***********multiple element using selector ***********
let get9 = document.getElementsByClassName("form-group"); /*returning html collection*/
console.log(get9);
// we can only use for and for of loop 
// we cannot use for each in html collection 
for (const iterator of get9) {
    iterator.style.backgroundColor = "black";
    iterator.style.color = "white";
}
get9 = Array.from(get9);
console.log(Array.isArray(get9));

// *************inner html ****************
let headline = document.getElementsByClassName("header-txt");
for (const iterator of headline) {
    iterator.innerHTML = "<h3>This is heading</h3>";
    iterator.innerHTML += "<button class = \"btn\">Click me</button>";
    console.log(iterator.innerHTML);
}

// ********tree practise ***************
console.log(document);
const rootnode = document.getRootNode();
console.log(rootnode);
const childnode = rootnode.childNodes[1];
console.log(childnode);
const head =childnode.childNodes[0];
console.log(head);
const body = childnode.childNodes[2];
console.log(body);
console.log(typeof body);
const bodyElement = body.childNodes;
for (const iterator of bodyElement) {
    console.log(iterator);
}
// sibling node 
// it will give the next child of parent item 
console.log(head.nextSibling.nextSibling);
// it will give parent 
console.log(body.parentNode);
// this #text does not show in the browser because
// white space property is set normal in browser that's why browser ignore this text 
// if you set this property to pre it will show the white sapces 

// to remove this text thing from console use element instead of node 
console.log(head.nextSibling);
console.log(head.nextElementSibling);
const h2 = document.querySelector("h2");
const parent = h2.parentElement;
console.log(parent);
parent.style.color = "orange";
// you can also select body 
console.log(document.body);
// you can also use nested query selector 
const ul = body.querySelector("ul")
console.log(ul);
console.log(ul.childNodes);
console.log(ul.children);