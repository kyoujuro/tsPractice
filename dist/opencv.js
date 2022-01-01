"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const opencv_ts_1 = __importDefault(require("opencv-ts"));
opencv_ts_1.default.onRuntimeInitialized = () => {
    const src = opencv_ts_1.default.imread("inputCanvas");
};
