import {
    readList,
    writeList
} from './ls.js';

export default class ToDo {

    constructor() {
        this.ToDoList = [];
        this.toggleError(false); // hide error msg
        this.readToDoList(); // read in current todo list (if there is one)
        this.setFilter(this.currentFilter = 1); // set to default = ALL (1)
    }

    updateToDoList() {
        console.log("updateTaskList()");

        this.toggleError(false); // reset the error msg

        let filterList = [];
        let tasksLeft = this.ToDoList.filter(todos => !todos.completed);

        // based on filter, do respective filter on array
        switch (this.currentFilter) {
            case '2':
                filterList = this.ToDoList.filter(todos => !todos.completed);
                break;
            case '3':
                filterList = this.ToDoList.filter(todos => todos.completed);
                break;
            default:
                filterList = this.ToDoList;
        }

        // build html for each item
        let taskItems = filterList.map(taskItem =>
            `<li class="task-item">` +
            `<input type="checkbox" ${taskItem.completed && "checked"} value="${taskItem.id}" class="task-item-check">` +
            `<label class="task-name">${taskItem.content}</label>` +
            `<button class="trash" value="${taskItem.id}"><i class="fa fa-trash"></i></button></li>`
        ).join('');

        // update the Task List
        document.querySelector(".task-items").innerHTML = taskItems;

        // update task checkbox event
        document.querySelectorAll(".task-item-check").forEach(taskItem => {
            taskItem.addEventListener('click', () => {
                this.toggleTask(taskItem.value);
            });
        });

        // update task delete event
        document.querySelectorAll(".trash").forEach(taskItem => {
            taskItem.addEventListener('click', () => {
                this.deleteTask(taskItem.value);
            });
        });

        // update Count for Tasks Left
        document.querySelector("#tasks-left").innerHTML = `${tasksLeft.length} tasks left`;
    }

    addTask() {
        let task = document.getElementById("new-task-item");
        console.log(`addTask(${task.value})`);

        // task is blank, show message and exit
        if (task.value == "") {
            this.toggleError(true);
            return;
        }

        let todo = {
            id: Date.now(),
            content: task.value,
            completed: false
        };
        task.value = ""; // clear input

        this.ToDoList.push(todo);
        this.writeToDoList();
    }

    deleteTask(task) {
        console.log(`deleteTask(${task})`);
        this.ToDoList = this.ToDoList.filter(todo => todo.id != task);
        this.writeToDoList();
    }

    toggleTask(task) {
        console.log(`toggleTask(${task})`);
        let taskItem = this.ToDoList.find(todo => todo.id == task);
        taskItem.completed = !taskItem.completed; // invert boolean
        this.writeToDoList();
    }

    // Set the ToDoList filter (All, Active, Completed)
    setFilter(filter) {
        console.log(`setFilter(${filter})`);
        this.currentFilter = filter;

        // set/remove class based on filter so CSS can make it pretty
        document.querySelectorAll(".task-filter").forEach(button => {
            if (button.value == filter)
                button.classList.add("task-filter-active");
            else
                button.classList.remove("task-filter-active");
        });

        this.updateToDoList();
    }

    readToDoList() {
        console.log('readList()');
        this.ToDoList = readList();
        this.updateToDoList();
    }

    writeToDoList() {
        console.log('writeList()');
        writeList(this.ToDoList);
        this.updateToDoList();
    }

    toggleError(toggle) {
        document.getElementById("error-msg").hidden = !toggle;
    }
}