/*

read/write ToDo array list enmasse.
Let the ToDo class handle parsing.

*/

export function readList() {
    let temp = JSON.parse(localStorage.getItem("todos"));
    return (temp == null ? [] : temp);
}

export function writeList(todoList) {
    localStorage.setItem("todos", JSON.stringify(todoList));
} 
