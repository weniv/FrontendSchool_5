import { plus } from "./plus.js";
import './style.css'
import rabbit2 from './images/rabbit2.png'

// console.log(plus(2, 4));

let env;
if (process.env.NODE_ENV === 'development') {
    env = dev
} else {
    env = pro
}

console.log(process.env.NODE_ENV);


document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${rabbit2}">`;
})

