import {SlideNav} from "./slide.js";

const slide = new SlideNav ('.slide', '.wrapper')

slide.init()
slide.addArrow('.prev', '.next')
slide.addControl('.custom-control')
slide.addTimeChange(10000)