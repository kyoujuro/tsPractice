"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNum(num1, num2) {
    alert(num1 + num2);
    return num1 + num2;
}
function showTime(time = new Date()) {
    if (time === undefined) {
        return `Now time is` + (new Date()).toLocaleString();
    }
    else {
        return `Now time is` + time.toLocaleString();
    }
}
console.log(showTime());
var Subject;
(function (Subject) {
    Subject[Subject["PE"] = 0] = "PE";
    Subject[Subject["Math"] = 1] = "Math";
    Subject[Subject["Engilish"] = 2] = "Engilish";
})(Subject || (Subject = {}));
console.log(Subject.Engilish);
class Person {
    constructor(job, age) {
        this.age = age;
        this.job = job;
    }
    show() {
        return `${this.job} は　${this.age}です。`;
    }
}
class BusinessPerson extends Person {
    work() {
        return `仕事は${this.job}です。`;
    }
}
let p = new BusinessPerson('Engineer', 45);
console.log(p.age);
console.log(p.show());
console.log(p.work());
class AdminUser extends Person {
    constructor(age, job, roles) {
        super(job, age);
        this.roles = 0;
        this.roles = roles;
    }
}
let admin = new AdminUser(10, 'Teacher', 1);
console.log('-------');
console.log(admin.show());
function addAgeFn(arg) {
    console.log(arg);
}
function genericsFn(arg) {
    console.log(arg);
}
addAgeFn(99);
genericsFn('Hello');
genericsFn(10);
genericsFn([1, 2, 3]);
var arr = [];
arr = ["a", "b", "c"];
console.log(arr.length);
arr.forEach(element => {
    console.log(element);
});
let startNum = Math.random() * 3;
console.log(startNum);
class Corr {
    constructor(sum_x, arr_x) {
        this.sum_x = sum_x;
        this.arr_x = arr_x;
    }
    sum_X() {
        this.arr_x.forEach(element => {
            this.sum_x += element;
        });
        console.log(this.sum_x);
    }
}
const num1 = new Corr(10, [10, 20, 30, 40]);
console.log(num1);
console.log(num1.sum_X());
console.log(Math.floor(10.57));
let string_arr = ['PHP', 'Java', 'Go', 'Rust'];
console.log(string_arr[1]);
let crr_number = [[10, 20], [30, 40], [50, 60]];
console.log(crr_number[1][1]);
crr_number.forEach(element => {
    console.log(element[1]);
});
crr_number.push([40, 50]);
console.log(crr_number);
var Programming;
(function (Programming) {
    Programming[Programming["Java"] = 0] = "Java";
    Programming[Programming["PHP"] = 1] = "PHP";
    Programming[Programming["C"] = 2] = "C";
    Programming[Programming["Typescript"] = 3] = "Typescript";
})(Programming || (Programming = {}));
let pro = Programming.PHP;
console.log(pro.toString.length);
let triangle = function (height, base) {
    return height * base / 2;
};
console.log(triangle(4.5, 19));
const relu = (x) => {
    if (x < 0)
        return 0;
    else
        return x;
};
console.log(relu(-4));
const sigmoid = (x) => {
    return (1 / (1 + Math.exp(x)));
};
console.log(sigmoid(0));
class Food {
    constructor(name, value) { }
}
class Vegetable extends Food {
    isStock() {
        if (this.value != null) {
            return false;
        }
        return true;
    }
}
var carrot = new Vegetable("carrot", 100);
console.log(carrot.isStock());
// const reget = document.getElementById("regit")!;
// const p_text = document.createElement("p");
// p_text.textContent ="hello";
// reget?.append(p_text);
// window.addEventListener("click", () => console.log("clicked"));
function echo(value) {
    return value;
}
console.log(echo("hoge").toUpperCase());
console.log(echo("FOO").toLocaleLowerCase());
console.log(echo([10, 20, 30]));
console.log(echo({ name: "Hello" }).name.toLowerCase());
function echoObject(value) {
    return value;
}
console.log(echoObject({ name: "Good" }));
function echoObjectKey(value, key) {
    return value;
}
echoObjectKey({ name: "hoge", age: 39 }, 'age');
console.log(echoObjectKey({ name: "hello", age: 45 }, 'age'));
class DatabaseConnect {
    constructor() {
        this.data = [];
    }
    dataAdd(item) {
        this.data.push(item);
    }
    delete(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    dataGet() {
        return this.data;
    }
}
const databaseConnect = new DatabaseConnect();
databaseConnect.dataAdd('Red');
databaseConnect.dataAdd('Yellow');
databaseConnect.delete('Red');
console.log(databaseConnect.dataGet());
const countDatabase = {
    id: 10,
    data: [1, 3]
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('test');
    }, 1000);
});
fetchData.then(data => {
    console.log(data.toUpperCase());
});
let response;
let tmp;
