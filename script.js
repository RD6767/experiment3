// Get elements from HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed when clicked
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    // Delete task when button is clicked
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to the list item
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add list item to task list
    taskList.appendChild(li);

    // Clear input box
    taskInput.value = "";
});
