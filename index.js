"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
function addNum(num1, num2) {
    alert(num1 + num2);
    return num1 + num2;
}
function showTime(time) {
    if (time === void 0) { time = new Date(); }
    if (time === undefined) {
        return "Now time is" + (new Date()).toLocaleString();
    }
    else {
        return "Now time is" + time.toLocaleString();
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
var Person = /** @class */ (function () {
    function Person(job, age) {
        this.age = age;
        this.job = job;
    }
    Person.prototype.show = function () {
        return "".concat(this.job, " \u306F\u3000").concat(this.age, "\u3067\u3059\u3002");
    };
    return Person;
}());
var BusinessPerson = /** @class */ (function (_super) {
    __extends(BusinessPerson, _super);
    function BusinessPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusinessPerson.prototype.work = function () {
        return "\u4ED5\u4E8B\u306F".concat(this.job, "\u3067\u3059\u3002");
    };
    return BusinessPerson;
}(Person));
var p = new BusinessPerson('Engineer', 45);
console.log(p.age);
console.log(p.show());
console.log(p.work());
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(age, job, roles) {
        var _this = _super.call(this, job, age) || this;
        _this.roles = 0;
        _this.roles = roles;
        return _this;
    }
    return AdminUser;
}(Person));
var admin = new AdminUser(10, 'Teacher', 1);
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
arr.forEach(function (element) {
    console.log(element);
});
var startNum = Math.random() * 3;
console.log(startNum);
var Corr = /** @class */ (function () {
    function Corr(sum_x, arr_x) {
        this.sum_x = sum_x;
        this.arr_x = arr_x;
    }
    Corr.prototype.sum_X = function () {
        var _this = this;
        this.arr_x.forEach(function (element) {
            _this.sum_x += element;
        });
        console.log(this.sum_x);
    };
    return Corr;
}());
var num1 = new Corr(10, [10, 20, 30, 40]);
console.log(num1);
console.log(num1.sum_X());
console.log(Math.floor(10.57));
var string_arr = ['PHP', 'Java', 'Go', 'Rust'];
console.log(string_arr[1]);
var crr_number = [[10, 20], [30, 40], [50, 60]];
console.log(crr_number[1][1]);
crr_number.forEach(function (element) {
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
var pro = Programming.PHP;
console.log(pro.toString.length);
var triangle = function (height, base) {
    return height * base / 2;
};
console.log(triangle(4.5, 19));
var relu = function (x) {
    if (x < 0)
        return 0;
    else
        return x;
};
console.log(relu(-4));
var sigmoid = function (x) {
    return (1 / (1 + Math.exp(x)));
};
console.log(sigmoid(0));
var Food = /** @class */ (function () {
    function Food(name, value) {
    }
    return Food;
}());
var Vegetable = /** @class */ (function (_super) {
    __extends(Vegetable, _super);
    function Vegetable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vegetable.prototype.isStock = function () {
        if (this.value != null) {
            return false;
        }
        return true;
    };
    return Vegetable;
}(Food));
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
var DatabaseConnect = /** @class */ (function () {
    function DatabaseConnect() {
        this.data = [];
    }
    DatabaseConnect.prototype.dataAdd = function (item) {
        this.data.push(item);
    };
    DatabaseConnect.prototype["delete"] = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DatabaseConnect.prototype.dataGet = function () {
        return this.data;
    };
    return DatabaseConnect;
}());
var databaseConnect = new DatabaseConnect();
databaseConnect.dataAdd('Red');
databaseConnect.dataAdd('Yellow');
databaseConnect["delete"]('Red');
console.log(databaseConnect.dataGet());
var countDatabase = {
    id: 10,
    data: [1, 3]
};
var fetchData = new Promise(function (resolve) {
    setTimeout(function () {
        resolve('test');
    }, 1000);
});
fetchData.then(function (data) {
    console.log(data.toUpperCase());
});
var response;
