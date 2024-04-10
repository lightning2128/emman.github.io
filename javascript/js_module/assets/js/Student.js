class Student {
    constructor(fullname, age, batchno, voice) {
        this.fullname = fullname;
        this.age = age;
        this.batchno = batchno;
        this.voice = voice;
    }
    get actions() {
        const now = new Date();
        const hour = now.getHours();

        if (hour >= 19 && hour <= 22) {
            return "Kodego Bootcamp";
        }
        else {
            return "Working";
        }
    }
    get owner() {
        return this._owner;
    }
    //backing property
    set owner(owner) {
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }

    saySomething() {
        console.log(this.voice);
    }
}


class Owner {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    set phone(phone) {
        const phoneNormalized = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNormalized;
    }

    get phone() {
        return this._phone;
    }
}

const NewOwner = new Owner("Jesthony", "Mandaluyong");
NewOwner.phone = '+63927-944-90-63';

console.log(NewOwner);
// const Jess = new Student("Jesthony Morales", 34, "WD99P", "Hello");

// // console.log(Jess.actions);
// // console.log(Jess);
// Jess.testProp = function() {
//     console.log("Test Prop");
// };
// Jess.owner = "Jesthony Morales";
// console.log(Jess.owner);
// console.log(Jess);
