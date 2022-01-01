function LoggingMemo(message: string){
    return function (constructor: Function){
    console.log(message);
    console.log(constructor);
    }
}

function Component(template: string, selector: string){
    return function(constructor: Function){
        const mountElement = document.querySelector(selector);
        if(mountElement){
            mountElement.innerHTML = template;
            mountElement.querySelector('p')!.textContent;
        }
    }
}

@Component('<p> {{ name }} </p>', '#app')
@LoggingMemo("log")
class Student{
    id!: number;
    name!: string
    constructor(){
        console.log("student's number is ");
    }
}

const student = new Student();
