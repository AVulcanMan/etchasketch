/*
- Create container div and add squares to it via JS
- Use FlexBox to make it a grid
*/
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const nueva = document.getElementById("create");

    function createGrid(size) {

        /*Creating the grid*/
        const flexBasisValue = `calc(100% / ${size})`;
        for (let i = 0; i < size*size; i++) {
            let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            const item = document.createElement("div");
            item.classList.add("items");
            item.style.flex = `1 0 ${flexBasisValue}`;
            container.appendChild(item);
            /*Hover effect*/
            item.addEventListener('mouseenter', function() {
                item.style.backgroundColor = color;
            });
        }
    }
    createGrid(16);
    nueva.addEventListener('click', function() {
        container.textContent = "";
        let choice = prompt("How big do you want it?", 16);
        createGrid(choice)
    });
});
