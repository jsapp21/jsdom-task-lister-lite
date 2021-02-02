const tasks = document.getElementById('tasks')
const text = document.getElementById('new-task-description')

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', logSubmit);
});

function logSubmit(event) {
  let element = document.createElement('li')
  tasks.appendChild(element)
  let newTask = tasks.lastChild
  newTask.innerText = text.value
  event.preventDefault();
}

