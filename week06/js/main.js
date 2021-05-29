import {loadCSS} from './utilities.js';
import ToDo from './ToDo.js';

// Load CSS/FontAwesome for icon display
loadCSS();

// for debugging.. clear things out
//localStorage.removeItem('todos');

// Fire up thrusters.. or the ToDo object
const ToDoList = new ToDo();

// Set Event for Add Task
document.querySelector("#add-task-button").addEventListener('click', () => { ToDoList.addTask() } );

// Set Event for filter buttons
document.querySelectorAll(".task-filter").forEach(button => {
    button.addEventListener('click', () => {
        ToDoList.setFilter(button.value)
    });
});