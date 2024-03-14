
let Items = [];

document.getElementById("btn-add").addEventListener('click', function() {
    let ID = document.getElementById("txtID").value;
    let NAME = document.getElementById("txtNAME").value;
    let HOURS = document.getElementById("txtHOURS").value;
    Items.push( [ID, NAME, HOURS] );
    DrawList();
});

function remove(index) {
    Items.splice(index, 1);
    DrawList();
}

function DrawList() {
    let List = "";

    for(let x = 0; x < Items.length; x++)
    List += "<li class='mt-1'>"+ Items[x][0] + " | " + Items[x][1]  + Items[x][2] +"<button class='btn btn-danger' onclick='remove("+x+")'>Remove</button></li>";

document.getElementById("ul-list").innerHTML = List;
}

