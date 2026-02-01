const Input = document.getElementById("add-todo-input");
const Button = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => addTodo(todo));
}


Button.addEventListener("click", () => {
    todos.push(Input.value);
    localStorage.setItem("todos", JSON.stringify(todos));
    addTodo(Input.value);
    Input.value = " ";
})

function addTodo(todo) {
    const para = document.createElement("p");
    para.classList.add("todo-item");
    para.textContent = todo;
    todoList.appendChild(para);

    para.addEventListener("click", () => {
        para.style.textDecoration = "line-through";
    });
    para.addEventListener("dblclick", () => {
        todoList.removeChild(para);
        removeTodo(todo);
    });

}

function removeTodo(todo) {
    const index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
}

