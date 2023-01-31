// you can see the class list that  are using in specific container 
// means how many classses are added in specific container 
const classes = document.querySelector(".header-txt");
console.log(classes.classList);
// we can also add class  
classes.classList.add("bg_dark");
// we can also remove class 
classes.classList.remove("todo");
console.log(classes.classList);
// we can also see if any specific class exist or not 
console.log(classes.classList.contains("todo"));
// toggle attribut will remove if the class exist if it does not exist then it will 
// add 
classes.classList.toggle("bg_dark");

// now will add some element using js 
const todolist = document.querySelector(".todoList");
console.log(todolist);
todolist.innerHTML += "<li>New todo item</li>";
// we will not use inner html to add Element but we can use to change the inner html 
// we will use these method to add html 
// append
// prepand 
// remove
const newtodo = document.createElement("li");
newtodo.textContent = "My todo item";
console.log(newtodo);
// todolist.append(newtodo);
// prepeand add in the starting 
todolist.prepend(newtodo);
const li = document.querySelector(".todolist li");
// li.remove();
// we have two more method 
const newitem = document.createElement("li");
newitem.textContent = "new item";
todolist.before(newitem);
todolist.after(newitem);
// you can also clone  
const newtodo2 = newtodo.cloneNode(true);
todolist.append(newtodo2);


// static list vs child list 
const ul = document.querySelector("ul");
const newli = document.createElement("li");
newli.textContent = "selling";
ul.append(newli);
// now see the static concept and child concept
console.log(ul.querySelectorAll("li"));




const classess = document.querySelector(".signup-form");
const newdiv = document.createElement("div");
newdiv.classList.add("form-group")
console.log(newdiv.classList)
newdiv.innerHTML = '<label for="phone">Phone</label>'
newdiv.innerHTML += '<input type="tel">'
classess.append(newdiv)