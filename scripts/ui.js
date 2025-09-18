/**
 * Creates a DOM element for a single task.
 * @param {Object} task - The task object.
 * @param {Function} onClick - The function to call when the task is clicked.
 * @returns {HTMLElement} The task div element.
 */
function createTaskElement(task, onClick) {
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task-div';
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener('click', () => onClick(task));

  return taskDiv;
}

/**
 * Renders all tasks on the board, divided into their respective status columns.
 * @param {Array<Object>} tasks - The array of tasks to render.
 * @param {Function} onTaskClick - The handler for when a task element is clicked.
 */
export function renderBoard(tasks, onTaskClick) {
  const tasksContainer = {
    todo: document.querySelector('.tasks-container[data-status="todo"]'),
    doing: document.querySelector('.tasks-container[data-status="doing"]'),
    done: document.querySelector('.tasks-container[data-status="done"]'),
  };

  Object.values(tasksContainer).forEach(container => {
    container.innerHTML = '';
  });

  const counts = { todo: 0, doing: 0, done: 0 };

  tasks.forEach(task => {
    if (tasksContainer[task.status]) {
      const taskElement = createTaskElement(task, onTaskClick);
      tasksContainer[task.status].appendChild(taskElement);
      counts[task.status]++;
    }
  });

  document.getElementById('toDoText').textContent = `TODO (${counts.todo})`;
  document.getElementById('doingText').textContent = `DOING (${counts.doing})`;
  document.getElementById('doneText').textContent = `DONE (${counts.done})`;
}