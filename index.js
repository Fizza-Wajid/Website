const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Add a remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '×';
  removeBtn.title = 'Remove task';
  removeBtn.onclick = () => taskList.removeChild(li);

  // Toggle completed state on click
  li.onclick = (e) => {
    // Prevent toggling when clicking the remove button
    if (e.target !== removeBtn) {
      li.classList.toggle('completed');
    }
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
