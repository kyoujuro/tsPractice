// class Person {
//     private _age!: number;
//     get age(): number {
//         return this._age;
//     }
//     set age(value: number){
//         if(value < 0){
//             throw new RangeError('ageプロパティは正数でお願いします。');
//         }
//         this._age = value;
//     }
// }

// let p = new Person();
// p.age = 400;
// console.log(p.age);

class Figure {
    public static PI: number = 3.14159;
    public static circle(radius: number): number {
        return radius * this.PI * this.PI;
    }
}

class FigureMath {
    public  PI: number = 3.14159;
    public  circle(radius: number): number {
        return radius * this.PI * this.PI;
    }
}


console.log(Figure.circle(3))

let figure = new FigureMath();
console.log(figure.PI)