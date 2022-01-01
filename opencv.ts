import cv, {Mat, Rect} from "opencv-ts"

cv.onRuntimeInitialized = () => {
    const src = cv.imread("inputCanvas");
   
}