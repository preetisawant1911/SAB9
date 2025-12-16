// Type definitions for Task Dashboard

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface TaskFilterOptions {
  status?: Task['status'];
  priority?: Task['priority'];
  search?: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
}

export interface TaskItemProps {
  task: Task;
  onStatusChange: (id: string, status: Task['status']) => void;
  onDelete: (id: string) => void;
}

export interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
}

export interface TaskFilterProps {
  onFilterChange: (filters: TaskFilterOptions) => void;
}
