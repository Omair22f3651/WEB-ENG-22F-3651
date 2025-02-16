const tasks = [];
const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority-select");
const addTaskButton = document.getElementById("add-task");
const tasksContainer = document.getElementById("tasks-container");
const completedTasksContainer = document.getElementById("completed-tasks");
const taskCount = document.getElementById("task-count");
const darkModeToggle = document.getElementById("dark-mode-toggle");

function renderTasks() {
    tasksContainer.innerHTML = "";
    completedTasksContainer.innerHTML = "";
    
    const incompleteTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    taskCount.textContent = incompleteTasks.length;

    ["High", "Medium", "Low"].forEach(priority => {
        const priorityGroup = incompleteTasks.filter(task => task.priority === priority);
        if (priorityGroup.length) {
            const groupDiv = document.createElement("div");
            groupDiv.innerHTML = `<h3>${priority} Priority</h3>`;
            priorityGroup.forEach(task => groupDiv.appendChild(createTaskElement(task)));
            tasksContainer.appendChild(groupDiv);
        }
    });

    completedTasks.forEach(task => completedTasksContainer.appendChild(createTaskElement(task)));
}

function createTaskElement(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task", task.priority.toLowerCase());
    if (task.completed) taskDiv.classList.add("completed");

    taskDiv.innerHTML = `
        <span>${task.name}</span>
        <div>
            <button class="complete-btn">${task.completed ? "Undo" : "Complete"}</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    return taskDiv;
}

tasksContainer.addEventListener("click", event => {
    if (event.target.classList.contains("complete-btn")) {
        const taskName = event.target.parentElement.parentElement.firstChild.textContent;
        const task = tasks.find(t => t.name === taskName);
        task.completed = !task.completed;
        renderTasks();
    } else if (event.target.classList.contains("delete-btn")) {
        const taskName = event.target.parentElement.parentElement.firstChild.textContent;
        const taskIndex = tasks.findIndex(t => t.name === taskName);
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
});

completedTasksContainer.addEventListener("click", event => {
    if (event.target.classList.contains("complete-btn")) {
        const taskName = event.target.parentElement.parentElement.firstChild.textContent;
        const task = tasks.find(t => t.name === taskName);
        task.completed = !task.completed;
        renderTasks();
    } else if (event.target.classList.contains("delete-btn")) {
        const taskName = event.target.parentElement.parentElement.firstChild.textContent;
        const taskIndex = tasks.findIndex(t => t.name === taskName);
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
});

addTaskButton.addEventListener("click", () => {
    const taskName = taskInput.value.trim();
    if (!taskName) return alert("Task cannot be empty");

    tasks.push({ name: taskName, priority: prioritySelect.value, completed: false });
    taskInput.value = "";
    renderTasks();
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
});

// Initial render
renderTasks();
