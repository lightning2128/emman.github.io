
let arrFruit = ["item1", "item2", 1, true, undefined];

//key value pair
var objPerson = {
    firstName: "Jesthony",
    lastName: "Morales",
    isMarried: true,
    age: 34,
    skills: ["Web Dev", "Coaching"],
    status: function() {
        return "Teaching";
    },
    addresses: {
        province: 'Catanduanes',
        current: 'Mandaluyong'
    }
};

//Object Destructure

// var { ages = 31, firstName, addresses, status: stat } = objPerson;

// console.log(ages);

// ToDisplay(objPerson);

function ToDisplay( {firstName, lastName, age, isMarried, skills, addresses, status: stat} ) {
    
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(isMarried);
    console.log(skills.join(", "));
    console.log(addresses.province + " " + addresses.current);
    console.log(stat());

    // console.log(obj.firstName);
    // console.log(obj.lastName);
    // console.log(obj.age);
    // console.log(obj.isMarried);
    // console.log(obj.skills.join(", "));
    // console.log(obj.addresses.province + " " + obj.addresses.current);
    // console.log(obj.status());
}

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200)
        {
            var objStudents = JSON.parse(xhr.responseText);
            objStudents.push({
                name: "Jesthony Morales",
                age: 34
            });

            // for (const student of objStudents) {
            //     ShowStudent(student);
            // }
        }
    }
}

xhr.open("GET", "assets/files/students.json");
xhr.send();


function ShowStudent({name, age}) {
    console.log(name);
    console.log(age);
    console.log("********************************\n\n");
}


let xhrDoctors = new XMLHttpRequest();
xhrDoctors.addEventListener("load", function(event) {
    var objDoctors = JSON.parse(event.srcElement.responseText);
    console.log(objDoctors);
});
// xhrDoctors.onreadystatechange = function() {
//     if (xhrDoctors.readyState == 4) {
//         if (xhrDoctors.status == 200)
//         {
//             var objDoctors = JSON.parse(xhrDoctors.responseText);
//             console.log(objDoctors);
//         }
//     }
// }

xhrDoctors.open("GET", "https://api.mydrsappt.com/api/v1/doctors");
xhrDoctors.send();