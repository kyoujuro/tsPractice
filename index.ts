import { isConditionalExpression, isConditionalTypeNode, SelectionRange } from "typescript";

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
    private id!: number;
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
    arr_y!: number[];
    avg_x!: number;
    avg_y!: number;
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
console.log(Math.floor(10.57));
let string_arr: Array<string> = ['PHP', 'Java', 'Go', 'Rust'];
console.log(string_arr[1]);
let crr_number: number[][] = [[10, 20],[30, 40],[50, 60]];
console.log(crr_number[1][1]);
crr_number.forEach(element => {
    console.log(element[1]);
});
crr_number.push([40, 50]);
console.log(crr_number);

enum Programming {
    Java,
    PHP,
    C,
    Typescript
}

let pro: Programming = Programming.PHP;
console.log(pro.toString.length);

let triangle: (height: number, base: number) => number =
    function(height: number, base: number): number {
        return height * base / 2;
    };
console.log(triangle(4.5, 19));

const relu = (x: number): number => {
    if(x < 0) return 0;
    else return x;
}

console.log(relu(-4));

const sigmoid = (x: number): number => {
    return (1 / (1 + Math.exp(x)));
}
console.log(sigmoid(0));

abstract class Food{
    constructor(name: string, value: number){}
    abstract isStock(): boolean;
}

class Vegetable extends Food{
    value: number | undefined;
    isStock(): boolean {
        if(this.value != null){
            return false;
        }
        return true;
    }
}

var carrot: Vegetable = new Vegetable("carrot", 100);
console.log(carrot.isStock());

// const reget = document.getElementById("regit")!;
// const p_text = document.createElement("p");
// p_text.textContent ="hello";
// reget?.append(p_text);

// window.addEventListener("click", () => console.log("clicked"));


function echo<T>(value: T): T{
    return value;
}

console.log(echo<string>("hoge").toUpperCase());
console.log(echo<string>("FOO").toLocaleLowerCase());
console.log(echo<Array<number>>([10, 20, 30]));
console.log(echo({name: "Hello"}).name.toLowerCase());

function echoObject<T extends{name: string}>(value: T): T{
    return value;
}

console.log(echoObject({name: "Good"}));
function echoObjectKey<T extends{name: string}, U extends keyof T>(value: T, key: U): T{
    return value;
}
echoObjectKey({name: "hoge", age: 39}, 'age');
console.log(echoObjectKey({name: "hello", age: 45}, 'age'));

class DatabaseConnect<T extends string | boolean |number>{
    private data: T[] = [];
    dataAdd(item: T){
        this.data.push(item);
    }
    delete(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }
    dataGet(){
        return this.data;
    }
}
const databaseConnect = new DatabaseConnect<string>();
databaseConnect.dataAdd('Red');
databaseConnect.dataAdd('Yellow');
databaseConnect.delete('Red');
console.log(databaseConnect.dataGet());

interface CountDatabase<T>{
    id: number;
    data: T[];
}

const countDatabase: CountDatabase<number> = {
    id: 10,
    data: [1, 3]
}

interface Todo{
    title: string,
    id: number
}

type TodoList = Readonly<Todo>;
type TodoAdd = Partial<Todo>;
const fetchData: Promise<string> = new Promise(resolve =>{
    setTimeout(() => {
        resolve('test');
    }, 1000);
})

fetchData.then(data => {
    console.log(data.toUpperCase());
})

interface ResponseAlert<T extends{ massage: string } = any>{
    data: string,
    code: number
}
let response: ResponseAlert;

interface Colors{
    'Red': string,
    'Blue': string
}
type MappedTypes = {
    readonly [P in keyof Colors]: string
}

type ConditionalType ='Red' extends string ? number : boolean;

type ConditionalTypeInfer = {'Red': 'Red'} extends {'Red': infer R }? R : boolean;

type ConditionalTypeCheck<T> = T extends 'Red' ? number : boolean;
let tmp: ConditionalTypeCheck<'Red' | 'Blue'>;
