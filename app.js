const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById('addButton');
const todoList = document.getElementById("todoList");
const clearAllButton = document.getElementById("clearAllButton");

function createTodoElement(taskText){
    const li = document.createElement("li");
    li.className = 'todo-item';

    const span = document.createElement("span");
    span.textContent = taskText;

    const actions = document.createElement('div');
    actions.className = 'todo-actions';

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener("click", () => {
        const newTaskText = prompt("edit task: ", span.textContent);
        if(newTaskText !== null){
            const newTaskSuccess = span.textContent = newTaskText;
            if(newTaskSuccess){
                alert("შენ წარმატებით განაახლე!")
            }
        }
    })

    const completedButton = document.createElement("button");
    completedButton.textContent = "Completed";
    completedButton.className = 'edit-button';
    completedButton.addEventListener('click', () => {
        span.classList.toggle("completed");
    })

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener("click", () => {
        li.remove();
    })

    actions.appendChild(editButton);
    actions.appendChild(completedButton);
    actions.appendChild(deleteButton);
    li.appendChild(span);
    li.appendChild(actions);

    return li;
}

addButton.addEventListener("click", () => {
    const tastText = todoInput.value.trim();
    if(tastText){
        const todoItem = createTodoElement(tastText);
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
})

todoInput.addEventListener("keypress", (event) => {
    console.log("event", event);
    if(event.key === "Enter"){
        addButton.click()
    }
})

clearAllButton.addEventListener("click", () => {
    todoList.innerHTML = "";
})
