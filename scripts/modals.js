/**
 * Opens the task details modal and populates it with task data.
 * @param {Object} task - The task object to display.
 */
export function openTaskModal(task) {
  const modal = document.getElementById('task-modal');
  const titleEl = document.getElementById('task-title');
  const descEl = document.getElementById('task-desc');

  titleEl.textContent = task.title;
  descEl.textContent = task.description;

  modal.showModal();
}

/**
 * Initializes all modal-related event listeners.
 * @param {Function} addTaskHandler - The function to call to add a new task.
 */
export function initModals(addTaskHandler) {
  const addTaskBtn = document.getElementById('add-new-task-btn');
  const addTaskModal = document.getElementById('add-task-modal');
  const closeAddTaskModalBtn = document.getElementById('close-add-modal-btn');
  const addTaskForm = document.getElementById('add-task-form');
  const taskModal = document.getElementById('task-modal');
  const closeTaskModalBtn = document.getElementById('close-modal-btn');

  closeTaskModalBtn.addEventListener('click', () => taskModal.close());
  addTaskBtn.addEventListener('click', () => addTaskModal.showModal());
  closeAddTaskModalBtn.addEventListener('click', () => addTaskModal.close());

  addTaskForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = document.getElementById('add-task-title').value;
    const description = document.getElementById('add-task-desc').value;
    const status = document.getElementById('add-task-status').value;

    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
      board: 'Launch Career',
    };

    addTaskHandler(newTask);
    addTaskForm.reset();
    addTaskModal.close();
  });
}