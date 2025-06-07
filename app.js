
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let color = getcolor();

    h3.innerText = color; 

    let div = document.querySelector("div");
    div.style.backgroundColor = color; 
});

function getcolor() {
    let red = Math.floor(Math.random() * 255)+1;
    let green = Math.floor(Math.random() * 255)+1;
    let blue = Math.floor(Math.random() * 255)+1;

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
