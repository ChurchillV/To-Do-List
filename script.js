const todo_data = document.getElementById('user_input');
const todolist = document.getElementById('todolist');
let popup_info = document.getElementById('info');
const popup = document.getElementById('popup');
const bg = document.getElementById('container');
const list_items = document.getElementsByClassName('new-todo');

//Add a new To do List item
function addTodo() {
    if (todo_data.value == "") {
        displayPopup();
        document.getElementById("popup-img").src = "./images/sweat-smile.jpg";
        popup_info.textContent = "Please enter a task";
        return;
    }
    else {
        const new_todo = ' ' + todo_data.value; //Space before to do item for some consistency
        const new_list_item = document.createElement('li');
        new_list_item.classList.add('new-todo');
        const new_checkbox = document.createElement('input');
        new_checkbox.type = 'checkbox';
        new_list_item.appendChild(new_checkbox);
        new_list_item.appendChild(document.createTextNode(new_todo));
        todolist.appendChild(new_list_item);
        todo_data.value = "";
        displayPopup();
        popup_info.textContent = "Task added successfully";
        document.getElementById("popup-img").src = "./images/check.png";
        return;
    }
}

//Update the To do list by removing checked items, Display pop-up
function updateTodos() {
    const todos = todolist.querySelectorAll('input[type="checkbox"]');
    if (list_items.length > 0) {
        for (let i = 0; i < todos.length; i++) {
        if (todos[i].checked) {
            const done_todo = todos[i].parentNode;
            todolist.removeChild(done_todo);
        }
    }
        //Display pop up
        displayPopup();
        popup_info.textContent = "To do list updated successfully";
        document.getElementById("popup-img").src = "./images/check.png";
    }
    else {
        displayPopup();
        document.getElementById("popup-img").src = "./images/sweat-smile.jpg"
        popup_info.textContent = "No items present";
        return;
    }
}

//Clear all To Do list items...Duhh
function clearAllTodos() {
    const todos = todolist.querySelectorAll('.new-todo');
    if (list_items.length > 0) {
        todos.forEach(todo => {
            while(todo.firstChild) {
                todo.removeChild(todo.firstChild);
            }
        })
        displayPopup();
        popup_info.textContent = "To do list cleared successfully";
        document.getElementById("popup-img").src = "./images/check.png";
    }
    else {
        displayPopup();
        popup_info.textContent = "No items to clear";
        document.getElementById("popup-img").src = "./images/sweat-smile.jpg"
        return;
    }
}

//Display pop up
function displayPopup() {
        popup.style.visibility = "visible";
        popup.style.top = "50%";
        popup.style.transform = "transform: translate(-50%, -50%) scale(1)";
        bg.style.filter = "blur(3px)";
        
        //Pop up disappears after 5.5 milliseconds
        setTimeout(() => {
        popup.style.visibility = "hidden";
        popup.style.top = "0";
        popup.style.transform = "transform: translate(-50%, -50%) scale(0.1)";
        bg.style.filter = "none"}, 550);
}