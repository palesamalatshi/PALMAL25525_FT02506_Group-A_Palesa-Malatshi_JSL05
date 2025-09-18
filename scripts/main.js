import { getTasks, saveTasks } from './storage.js';
import { renderBoard } from './ui.js';
import { initModals, openTaskModal } from './modals.js';

const state = {
  tasks: [],
};

/**
 * Refreshes the UI by re-rendering the task board.
 */
function refreshUI() {
  renderBoard(state.tasks, openTaskModal);
}

/**
 * Adds a new task to the state, saves it, and refreshes the UI.
 * @param {Object} task - The new task object to add.
 */
function addTask(task) {
  state.tasks.push(task);
  saveTasks(state.tasks);
  refreshUI();
}

/**
 * Initializes the application.
 */
document.addEventListener('DOMContentLoaded', () => {
  state.tasks = getTasks();
  refreshUI();
  initModals(addTask);
});