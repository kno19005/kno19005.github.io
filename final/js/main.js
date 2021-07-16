//import {loadCSS} from './utilities.js';
import Stockology from "./stockology.js"

// Load CSS/FontAwesome for icon display
//loadCSS();

// for debugging.. clear things out
//localStorage.removeItem('todos');

// Fire up thrusters.. pass in controls to object so object takes over
const Stocks = new Stockology(
    document.querySelector("#symbol"),
    document.querySelector("#btnTicker"),
    document.querySelector("#btnCompany"),
    document.querySelector("#msg"),
    document.querySelector("#resultTable"));

// // Set Event for filter buttons
// document.querySelectorAll(".task-filter").forEach(button => {
//     button.addEventListener('click', () => {
//         ToDoList.setFilter(button.value)
//     });
// });