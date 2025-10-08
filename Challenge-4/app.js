const inputTask = document.getElementById('taskInput');
const addBtn = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const totalTask = document.getElementById("totalTasks");
const completTask = document.getElementById('completedTasks');
const list = document.getElementById('empty-list')

addBtn.addEventListener('click', () => {

  const value = inputTask.value.trim();

  if (value === "") {
    alert('Plese enter a task ');
    return;
  }

  const li = document.createElement("li");
  li.classList.add('task-item', 'task-stats');

  //  checkBox
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox'
  checkBox.classList.add('complete-checkbox');
  li.appendChild(checkBox);

  //  input text

  const span = document.createElement('span');
  span.innerText = value
  span.classList.add('task-text')
  li.appendChild(span);

  // delete button

  const del = document.createElement('button');
  del.innerText = 'Del'
  del.classList.add('delete-button');
  li.appendChild(del);

  // del Event
  del.addEventListener("click", () => {
    li.remove();
    updateTask();
  })


  // checkbox event

  checkBox.addEventListener('change', () => {
    if (checkBox.checked) {
      span.classList.add('completed')

    } else {

      span.classList.remove('completed')
    }

    updateTask();
  })

  taskList.appendChild(li);
  updateTask();

  inputTask.value = '';

});

function updateTask() {

  const allTask = taskList.querySelectorAll('li').length;
  const doneTask = taskList.querySelectorAll('.completed').length;

  totalTask.innerText = `Total tasks: ${allTask}`
  completTask.innerText = `Completed: ${doneTask}`

}
