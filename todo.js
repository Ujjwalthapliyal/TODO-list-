document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    addTaskBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });

    function addTask(taskText) {
      const li = document.createElement('li');
      li.className = 'task';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const taskTextElement = document.createElement('span');
      taskTextElement.innerText = taskText;

      const removeBtn = document.createElement('button');
      removeBtn.innerText = 'Remove';
      removeBtn.addEventListener('click', function () {
        todoList.removeChild(li);
      });

      li.appendChild(checkbox);
      li.appendChild(taskTextElement);
      li.appendChild(removeBtn);
      todoList.appendChild(li);
    }
  });