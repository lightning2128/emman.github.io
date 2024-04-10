let Btns = document.getElementsByClassName("btn");

for (let btn of Btns) {
    btn.addEventListener("click", function() {
        document.querySelector("#div-body").className = 'border';
        document.querySelector("#div-body").classList.add(`bg-${this.innerText.toLowerCase()}`);
    });
}