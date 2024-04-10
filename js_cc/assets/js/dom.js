// window global variable

// Change body background
// variable name -

// background-color

// function change_color() {
//     document.body.style.backgroundColor = "red";
//     document.body.style.color = "WHITE";
// }

// CSS
// ID => # (hashtag) + element_id
// CLASSNAME => . (dot) + element_class

//document.getElementById(element_id);
document.getElementById("btn-convert").addEventListener("click", function() {
    change_color();
});

document.getElementById("btn-reset").addEventListener("click", function() {
    reset();
});

function change_color() {
    document.getElementById("p-phrase").style.color = "red";
    document.getElementById("btn-convert").style.color = "red";

    //document.getElementsByClassName(class_name)
    let Ps = document.getElementsByClassName("p-class");
    for(let p of Ps) { //for of
        p.classList.add("rounded", "bg-primary", "text-white");        
    }
}

function reset() {
    //document.getElementsByClassName(class_name)
    let Ps = document.getElementsByClassName("p-class");
    for(let p of Ps) { //for of
        p.classList.remove("rounded", "bg-primary", "text-white");
    }
}

document.getElementById("btn-add").addEventListener("click", function() {
    add();
});

function add() {
    let NewPText = prompt("Enter Paragraph");
    let NewP = document.createElement("p");
    NewP.className = "p-class";
    NewP.textContent = NewPText;

    document.getElementById("div-parent").append(NewP);
}




