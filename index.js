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
        return this.job + " \u306F\u3000" + this.age + "\u3067\u3059\u3002";
    };
    return Person;
}());
var BusinessPerson = /** @class */ (function (_super) {
    __extends(BusinessPerson, _super);
    function BusinessPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusinessPerson.prototype.work = function () {
        return "\u4ED5\u4E8B\u306F" + this.job + "\u3067\u3059\u3002";
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
