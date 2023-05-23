  // Todo List Manager
  const todoForm = document.querySelector('.todo-form');
  const todoInput = document.querySelector('.todo-form input[type="text"]');
  const todoList = document.querySelector('.todo-list');
  const deleteButton = document.querySelector('#delete-button');

  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const task = todoInput.value.trim();

    if (task !== '') {
      const todoItem = document.createElement('li');
      const checkbox = document.createElement('input');
      const taskLabel = document.createElement('label');

      checkbox.type= "checkbox";
      checkbox.classList.add("todo-checkbox");
      taskLabel.textContent = task;
      todoItem.classList.add("todo-item");
      todoItem.appendChild(checkbox);
      todoItem.appendChild(taskLabel);
      todoList.appendChild(todoItem);

      todoInput.value = "";
}
});

function deleteTasks() {
    const checkboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.parentElement.remove();
      }
    });
  }
  
  deleteButton.addEventListener('click', deleteTasks);

