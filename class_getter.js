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
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.circle = function (radius) {
        return radius * this.PI * this.PI;
    };
    Figure.PI = 3.14159;
    return Figure;
}());
var FigureMath = /** @class */ (function () {
    function FigureMath() {
        this.PI = 3.14159;
    }
    FigureMath.prototype.circle = function (radius) {
        return radius * this.PI * this.PI;
    };
    return FigureMath;
}());
console.log(Figure.circle(3));
var figure = new FigureMath();
console.log(figure.PI);
