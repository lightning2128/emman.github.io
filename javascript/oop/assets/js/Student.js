// reserve word
class Student {
    constructor(name, age, batchno, shout) {
        this.name = name;
        this.age = age;
        this.batchno = batchno;
        this.shout = shout;
    }

    get getAverage() {
        return [this._grade, this._average];
    }

    set setGrade(grade) {
        this._grade = grade;
        if (grade < 75) {
            this._average = 'failed';
        } else {
            this._average = 'passed';
        }
    }

    get getPhone()  {
        return this._phone;
    }

    set phone(phone)  {
        //Regular Expression
        const normalizedPhone = phone.replace(/[^0-9]/g, '');
        this._phone = normalizedPhone;
    }

    shoutout() {
        console.log(this.shout);
    }
}

const student1 = new Student("Jesthony Morales", 34, "WD99P", "Hooray");
const student2 = new Student("Jevon Mati Morales", 1, "WD100P", "Hello");
const student3 = new Student("Vina Morales", 45, "WD001P", "Hi");

student1.setGrade = 98;
student1.phone = "Tel : 63-927-944-9063";
console.log(student1);

student2.setGrade = 74;
console.log(student2.getAverage);

student3.setGrade = 86;
console.log(student3.getAverage);

// setInterval("DisplayTime()", 1000);
// function DisplayTime() {
//     const DateToday = new Date();
//     const hour = DateToday.getHours();
//     const mins = DateToday.getMinutes();
//     const secs = DateToday.getSeconds();

//     document.getElementById("div-time").innerHTML = `${hour}:${mins}:${secs}`;
// }

// const newArray = new Array("item1", "item2", "item3");