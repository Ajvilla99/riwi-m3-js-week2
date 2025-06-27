console.log("To-Do List initialized");

// Estructuras de datos
const tasks = {};
const taskDescriptions = new Set();
const taskCategories = new Map();
let taskIdCounter = 1;

function addTask() {
  const description = document.getElementById("taskInput").value.trim();
  const category = document.getElementById("categorySelect").value;

  if (!description) {
    alert("Por favor escribe una tarea.");
    return;
  }

  if (taskDescriptions.has(description)) {
    alert("Esa tarea ya existe.");
    return;
  }

  const task = { id: taskIdCounter, description, completed: false };
  tasks[taskIdCounter] = task;
  taskDescriptions.add(description);

  if (!taskCategories.has(category)) {
    taskCategories.set(category, []);
  }
  taskCategories.get(category).push(taskIdCounter);

  taskIdCounter++;
  document.getElementById("taskInput").value = "";
  renderTasks();
}

function renderTasks() {
  const container = document.getElementById("taskList");
  container.innerHTML = "";

  taskCategories.forEach((taskIds, category) => {
    const categoryBlock = document.createElement("div");
    categoryBlock.innerHTML = `<h3>${category}</h3>`;
    const list = document.createElement("ul");

    taskIds.forEach((id) => {
      const task = tasks[id];
      const li = document.createElement("li");

      // Texto
      const span = document.createElement("span");
      span.textContent = task.description;
      if (task.completed) span.classList.add("completed");

      // Botones
      const buttonGroup = document.createElement("div");
      buttonGroup.className = "button-group";

      const completeBtn = document.createElement("button");
      completeBtn.textContent = task.completed ? "✅" : "✔️";
      completeBtn.className = "complete-btn";
      completeBtn.onclick = () => {
        task.completed = !task.completed;
        renderTasks();
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑️";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => {
        delete tasks[id];
        taskDescriptions.delete(task.description);
        const index = taskCategories.get(category).indexOf(id);
        if (index !== -1) {
          taskCategories.get(category).splice(index, 1);
          if (taskCategories.get(category).length === 0) {
            taskCategories.delete(category);
          }
        }
        renderTasks();
      };

      buttonGroup.appendChild(completeBtn);
      buttonGroup.appendChild(deleteBtn);
      li.appendChild(span);
      li.appendChild(buttonGroup);
      list.appendChild(li);
    });

    categoryBlock.appendChild(list);
    container.appendChild(categoryBlock);
  });
}
