import React, { useState } from 'react';
import type { TaskFilterProps, TaskFilterOptions } from '../../types';

export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<TaskFilterOptions>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="flex gap-2 mb-4">
      <select name="status" onChange={handleChange} className="border p-2">
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select name="priority" onChange={handleChange} className="border p-2">
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="text"
        name="search"
        placeholder="Search tasks"
        onChange={handleChange}
        className="border p-2"
      />
    </div>
  );
};
