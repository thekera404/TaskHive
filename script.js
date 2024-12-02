// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Validate input
  if (!taskText) {
    alert("Please enter a task!");
    return;
  }

  // Create a new task element
  const newTask = createTaskElement(taskText);

  // Append the new task to the list
  taskList.appendChild(newTask);

  // Clear the input field
  taskInput.value = "";
}

// Helper function to create a task element
function createTaskElement(taskText) {
  const newTask = document.createElement("li");
  newTask.className = "task";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  const label = document.createElement("label");
  label.textContent = taskText;

  // Add accessibility and functionality
  const taskId = `task-${Date.now()}`;
  checkbox.id = taskId;
  label.setAttribute("for", taskId);

  // Append checkbox and label to the task
  newTask.appendChild(checkbox);
  newTask.appendChild(label);

  return newTask;
}

// Add task on button click
addTaskButton.addEventListener("click", addTask);

// Add task on Enter key press
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
