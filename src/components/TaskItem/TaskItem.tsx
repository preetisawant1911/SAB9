import React from 'react';
import type { TaskItemProps } from '../../types';

export const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  return (
    <div className="border rounded p-4 mb-2 bg-white shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
        <p className="text-xs">Priority: {task.priority}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={() => {
            const nextStatus =
              task.status === 'pending'
                ? 'in-progress'
                : task.status === 'in-progress'
                ? 'completed'
                : 'pending';
            onStatusChange(task.id, nextStatus);
          }}
        >
          {task.status}
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
