import React, { useState } from 'react';
import { TaskList } from '../TaskList/TaskList';
import { TaskForm } from '../TaskForm/TaskForm';
import { TaskFilter } from '../TaskFilter/TaskFilter';
import { filterTasks, sortTasks } from '../../utils/taskUtils';
import type { Task, TaskFormData, TaskFilterOptions } from '../../types';

export const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilterOptions>({});
  const [ascending, setAscending] = useState(true);

  const handleAddTask = (data: TaskFormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      priority: data.priority,
      dueDate: data.dueDate,
      status: 'pending',
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleStatusChange = (id: string, status: Task['status']) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleFilterChange = (newFilters: TaskFilterOptions) => {
    setFilters(newFilters);
  };

  const toggleSort = () => {
    setAscending((prev) => !prev);
  };

  const filteredTasks = filterTasks(tasks, filters);
  const sortedTasks = sortTasks(filteredTasks, ascending);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Dashboard</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskFilter onFilterChange={handleFilterChange} />
      <button
        onClick={toggleSort}
        className="mb-4 px-4 py-2 bg-purple-500 text-white rounded"
      >
        Sort by Due Date ({ascending ? 'Asc' : 'Desc'})
      </button>
      <TaskList tasks={sortedTasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </div>
  );
};
