import { SelectionRange } from "typescript";

function addNum(num1: number, num2: number): number{
    alert(num1 + num2);
    return num1 + num2;
}




function showTime(time: Date = new Date()): string {
    if (time === undefined) {
        return `Now time is` + (new Date()).toLocaleString(); 
    } else {
        return `Now time is` + time.toLocaleString();
    }
}

console.log(showTime());

enum Subject {
    PE,
    Math,
    Engilish
}

console.log(Subject.Engilish);


class Person {
    private id: number;
    protected job: string;
    age: number;
    constructor(job: string, age: number){
        this.age = age;
        this.job = job;
    }

    show (): string {
        return `${this.job} は　${this.age}です。`
    }
}


class BusinessPerson extends Person {
    work (): string {
        return `仕事は${this.job}です。`
    }
}


let p = new BusinessPerson('Engineer', 45);
console.log(p.age);
console.log(p.show());
console.log(p.work());

class AdminUser extends Person {
    protected roles: number = 0;
    constructor(age: number, job: string, roles: number){
        super(job, age);
        this.roles = roles;
    }
}

let admin = new AdminUser(10, 'Teacher', 1);
console.log('-------')
console.log(admin.show());


function addAgeFn(arg: number){
    console.log(arg);
}

function genericsFn<T>(arg: T){
    console.log(arg);
}

addAgeFn(99);
genericsFn('Hello')
genericsFn(10);
genericsFn([1, 2, 3]);

var arr: string[] = [];
arr = ["a", "b", "c"];
console.log(arr.length);

arr.forEach(element => {
   console.log(element); 
});
let startNum: number = Math.random() * 3;
console.log(startNum);

interface StatisticsNum{
    arr_x: number[];
    arr_y: number[];
    avg_x: number;
    avg_y: number;
}

class Corr implements StatisticsNum{
    arr_x: number[];
    arr_y;
    avg_x;
    avg_y: number;
    sum_x: number;
    constructor(sum_x: number, arr_x: number[]){
        this.sum_x = sum_x;
        this.arr_x = arr_x;
    }
    sum_X(){
        this.arr_x.forEach(element => {
            this.sum_x += element;
        });
        console.log(this.sum_x);
    }
}
const num1 = new Corr(10, [10, 20, 30, 40]);
console.log(num1);
console.log(num1.sum_X());