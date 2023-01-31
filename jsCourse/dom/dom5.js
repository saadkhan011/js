console.log("hello world");
const value = document.querySelector("#totoForm");
const todoText = document.querySelector(".searchBox input[type = 'text']");
const li = document.querySelector(".todoList");
let text;
value.addEventListener("submit", function(e){
    e.preventDefault();
    text = todoText.value;
    console.log(text);
    const newli = document.createElement("li");
    newli.classList.add("todo1")
    newliInnerHTML = `<span>${text}</span>
    <button class="btn delete">Delete</button>
    <button class="btn done">Done</button>`;
    newli.innerHTML = newliInnerHTML;
    li.append(newli);
    console.log(newli)
    todoText.value = "";
})
li.addEventListener("click", function(e){
    if(e.target.classList.contains("delete")){
        console.log("deleted")
        const liitem = e.target.parentNode;
        liitem.innerHTML = "";
    }
    if(e.target.classList.contains("done")){
        console.log("done");
        let lispan = e.target.parentNode.childNodes[0];
        lispan.style.textDecoration = "line-through";
    }
})