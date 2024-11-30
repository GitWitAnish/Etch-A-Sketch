const container = document.querySelector("#container");
const btn = document.querySelector("#button");
const reset = document.querySelector("#reset");


function createGrid(size) {
    container.innerHTML= '';
    document.documentElement.style.setProperty('--grid-size', size);

    for (i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "hsl(" + 360 * Math.random() + ', 90%, 80%)';

        })
    }
}
createGrid(16); 


btn.addEventListener("click", function changeSize(size) {
    size = prompt("Change the grid by entering a value between 1 and 100.");
    container.innerHTML = "";
    if ( 0 < size && size <=100) {
        createGrid(size);
    } else {
        createGrid(16);
        alert("Try again! Only a value between 1 and 100!")
    }
});

reset.addEventListener('click', (event) => {
    container.innerHTML = ""
    createGrid(16)
  });