// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add event listener to the "Add" button
addTaskButton.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(listItem);

    // Add event listener to mark task as completed
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // Add event listener to the delete button
    const deleteButton = listItem.querySelector('.delete');
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        taskList.removeChild(listItem);
    });

    // Clear the input field
    taskInput.value = '';
}

// Optional: You can add more features like saving tasks to local storage for persistence.
