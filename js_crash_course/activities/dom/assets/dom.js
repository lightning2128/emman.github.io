// let Btns = document.getElementsByClassName("btn");
// for(const btn of Btns) {
//     btn.addEventListener("click", function() {       
//         document.getElementById("div-body").className = "border";
//         document.getElementById("div-body").classList.add("bg-" + btn.innerText.toLowerCase());
//     });
// }

let Btns = $(".btn");
for(const btn of Btns) {
    $(btn).click(function() {
        let Txt = $(btn).text();
        if (Txt == "Hide")
            $("#div-body").fadeOut(500);
        else if (Txt == "Show")
            $("#div-body").fadeIn(500);
        else {
            let Name = $("#txtName").val();
            $("#div-body").removeClass();
            $("#div-body").addClass("bg-" + Txt.toLowerCase());
            $("#div-body").append("<p>"+Name+"</p>");

            $("#txtName").val("");
            $("#txtName").focus();

            _loadAjax(btn);
        }
    });
}

// let xhr = new XMLHttpRequest();
function _loadAjax(btn) {
    $.ajax({
        type: 'GET',
        url: 'https://catfact.ninja/fact',
        beforeSend: function() {
            $("#div-body").html(`<div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`);
        },
        success: function(result) {
            $("#div-body").html("");
            console.log(result);
        },
        error: function(error) {
            console.log(error.responseText);
        }
    });
}