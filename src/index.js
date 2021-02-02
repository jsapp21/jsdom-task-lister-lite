// these variables need to be outside that locate the html id's
const tasks = document.getElementById('tasks')
const text = document.getElementById('new-task-description')

// event listner for dom, form and submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', logSubmit);
});

// upon submit create li for the tasks variable, 
// appened it to the tasks
// new task variable call last child and insert the text value
// prevent the event from submitting
function logSubmit(event) {
  let element = document.createElement('li')
  tasks.appendChild(element)
  let newTask = tasks.lastChild
  newTask.innerText = text.value
  event.preventDefault();
}

