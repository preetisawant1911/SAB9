import type { Task, TaskFilterOptions } from '../types';

// Filter tasks
export function filterTasks(tasks: Task[], filters: TaskFilterOptions): Task[] {
  return tasks.filter((task) => {
    const statusMatch = filters.status ? task.status === filters.status : true;
    const priorityMatch = filters.priority ? task.priority === filters.priority : true;
    const searchMatch = filters.search
      ? task.title.toLowerCase().includes(filters.search.toLowerCase())
      : true;
    return statusMatch && priorityMatch && searchMatch;
  });
}

// Sort tasks by due date
export function sortTasks(tasks: Task[], ascending = true): Task[] {
  return [...tasks].sort((a, b) => {
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}
