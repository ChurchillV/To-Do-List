const todo_data = document.getElementById('user_input');
const todolist = document.getElementById('todolist');

function addTodo() {
    const new_todo = todo_data.value;
    const new_list_item = document.createElement('li');
    new_list_item.classList.add('new-todo');
    const new_checkbox = document.createElement('input');
    new_checkbox.type = 'checkbox';
    new_list_item.appendChild(new_checkbox);
    new_list_item.appendChild(document.createTextNode(new_todo));
    todolist.appendChild(new_list_item);
    todo_data.value = "";
}

function updateTodos() {
    const todos = todolist.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].checked) {
            const done_todo = todos[i].parentNode;
            todolist.removeChild(done_todo);
        }
    }
    alert("Todo List Updated Successfully");
}

function clearAllTodos() {
    const todos = todolist.querySelectorAll('.new-todo');
    todos.forEach(todo => {
        while(todo.firstChild) {
            todo.removeChild(todo.firstChild);
        }
    })
    alert("Todo List Cleared");
}