import { initialTasks } from './data.js';

const TASK_STORAGE_KEY = 'tasks';

/**
 * Retrieves tasks from local storage. If no tasks are found,
 * it initializes storage with a default set of tasks.
 * @returns {Array<Object>} The array of task objects.
 */
export function getTasks() {
  const tasksJson = localStorage.getItem(TASK_STORAGE_KEY);
  if (!tasksJson) {
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(initialTasks));
    return initialTasks;
  }
  return JSON.parse(tasksJson);
}

/**
 * Saves an array of tasks to local storage.
 * @param {Array<Object>} tasks - The array of tasks to save.
 */
export function saveTasks(tasks) {
  localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
}