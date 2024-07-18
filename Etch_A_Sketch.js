//global variables
let gridParent = document.querySelector("#gridparent");
let div = document.querySelector("div");
let button = document.querySelector("button");

//declaring functions to make the page work
function createError(){
        alert('Choose a number less than or equal to 100!')
}

//builds new grid
function createGrid(number){
    if (number > 100) {
        createError();}
        else {
    for (let i = 0; i < (number*number); i++){
    let gridChild = document.createElement("div");
    gridChild.style.cssText = `margin: 0; padding: 0; width: ${450/number}px; height: ${450/number}px;`;
    gridChild.classList.add('unrolled');
    gridParent.appendChild(gridChild);
}}   
}

//removes old grid
function clearGrid() {
    while (gridParent.firstChild) {
        gridParent.removeChild(gridParent.lastChild);
      }
}

//fires when button is clicked, takes userinput and fires clearGrid and createGrid
function getUserInput() {
    let userInput = prompt("How many squares tall and wide do you want your Etch-A-Sketch to be?", "0-100");
    clearGrid();
    createGrid(userInput);
}

//event listener to run createGrid when button is clicked
button.addEventListener("onclick", getUserInput())

//event listener, listens to parent and affects the targeted child
gridParent.addEventListener("mouseover", (event) => {
    let pixelColor = getComputedStyle(event.target).backgroundColor
    let currentOpacity = getComputedStyle(event.target).opacity;
    if ( pixelColor === 'rgb(255, 255, 255)' && currentOpacity === '1'){
        event.target.classList.replace('unrolled', 'rolledover');
        event.target.style.opacity = '.1';
    } else if (+currentOpacity < 1){
            event.target.style.opacity = (+currentOpacity + .1).toString();
    } else {};
});


