"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const opencv_ts_1 = __importDefault(require("opencv-ts"));
opencv_ts_1.default.onRuntimeInitialized = () => {
    const src = opencv_ts_1.default.imread("inputCanvas");
    const dst = new opencv_ts_1.default.Mat(src.cols, src.rows, opencv_ts_1.default.CV_8UC4);
    opencv_ts_1.default.resize(src, dst, new opencv_ts_1.default.Size(500, 500), 0, 0, opencv_ts_1.default.INTER_AREA);
    const roiRect = new opencv_ts_1.default.Rect(0, 0, 200, 200);
    const roi = dst.roi(roiRect);
    opencv_ts_1.default.imshow('outputCanvas', roi);
};
