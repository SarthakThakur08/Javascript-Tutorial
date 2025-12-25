let btnl = document.querySelector("#btn1")
// btnl.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }
let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("You Know That It Is a Div")
}

btnl.addEventListener("click", (e) => {
    console.log("Button Clicked");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);  
});

let mode = document.querySelector("#mode");
let currentMode = "light";

mode.addEventListener("click", () => {
    if(currentMode === "light"){
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
} else {
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log("Mode Changed to " + currentMode);
});