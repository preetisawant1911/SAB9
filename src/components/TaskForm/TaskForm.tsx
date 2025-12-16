import React, { useState } from 'react';
import type { TaskFormProps, TaskFormData } from '../../types';

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    priority: 'low',
    dueDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.dueDate) {
      alert('Title and Due Date are required!');
      return;
    }
    onSubmit(formData);
    setFormData({ title: '', description: '', priority: 'low', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={formData.title}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="description"
        placeholder="Task description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};
