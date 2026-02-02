const titleInput = document.getElementById("add-title-input");
const descriptionInput = document.getElementById("add-desc-input");
const dueDateInput = document.getElementById("add-date-input");
const priorityInput = document.getElementById("add-priority-input");

const Button = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");

let todos = [];

window.addEventListener("DOMContentLoaded", loadLocalStorage);

Button.addEventListener("click", () => {
    if (!titleInput.value.trim() || !descriptionInput.value.trim() || !dueDateInput.value.trim() || !priorityInput.value.trim()) {
        alert("Please fill all the fields");
        return;
    }

    const todo = {
        title: titleInput.value,
        description: descriptionInput.value,
        dueDate: dueDateInput.value,
        priority: priorityInput.value,
    }
    addTodo(todo);
    renderTodo(todo);
    resetInputs();
})

function loadLocalStorage() {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => renderTodo(todo));
}

function addTodo(todo) {
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodo(todo) {
    const para = document.createElement("p");
    para.classList.add("todo-item");
    para.textContent = `${todo.title} - ${todo.description} - ${todo.dueDate} - ${todo.priority}`;
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

function resetInputs() {
    titleInput.value = "";
    descriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "low";
}