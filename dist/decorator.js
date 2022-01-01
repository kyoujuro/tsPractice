"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LoggingMemo(message) {
    return function (constructor) {
        console.log(message);
        console.log(constructor);
    };
}
function Component(template, selector) {
    return function (constructor) {
        const mountElement = document.querySelector(selector);
        if (mountElement) {
            mountElement.innerHTML = template;
            mountElement.querySelector('p').textContent;
        }
    };
}
let Student = class Student {
    constructor() {
        console.log("student's number is ");
    }
};
Student = __decorate([
    Component('<p> {{ name }} </p>', '#app'),
    LoggingMemo("log")
], Student);
const student = new Student();
