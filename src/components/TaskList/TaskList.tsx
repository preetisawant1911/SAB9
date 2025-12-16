import React from 'react';
import { TaskItem } from '../TaskItem/TaskItem';
import type { TaskListProps } from '../../types';

export const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};
