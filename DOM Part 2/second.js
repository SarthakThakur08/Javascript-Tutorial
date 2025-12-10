// let div = document.querySelector("div");
// div.style.backgroundColor = "Red";
// div.style.fontSize = "26px";

// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// div.innerText = "hello!"
// div.style.visibility = "hidden"

let newbtn = document.createElement("button");
newbtn.innerText = "click me"
console.log("newbtn");

let div = document.querySelector("div")
div.after(newbtn);

let newheading = document.createElement("h1");
newheading.innerText = "Hey There! My Name Is Sarthak Thakur";

document.querySelector("body").prepend(newheading);

// let p = document.querySelector("p");
// p.remove();

let button = document.createElement("button");
button.innerText = "Click Me!";
console.log("button");
button.style.backgroundColor = "Red";
button.style.color = "white";
document.querySelector("body").appendChild(button);

let paragraph = document.querySelector("p.pq");
paragraph.classList.add("newclass");