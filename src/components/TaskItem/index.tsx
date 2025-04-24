import { Trash, Check } from 'phosphor-react';
import './styles.css';

export interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskItemProps {
  task: Task;
  onDeleteTask: (taskId: string) => void;
  onToggleTaskCompletion: (taskId: string) => void;
}

export function TaskItem({ task, onDeleteTask, onToggleTaskCompletion }: TaskItemProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleToggleTaskCompletion() {
    onToggleTaskCompletion(task.id);
  }

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <button 
        className="check-button"
        onClick={handleToggleTaskCompletion}
        title={task.isCompleted ? "Marcar como não concluída" : "Marcar como concluída"}
      >
        <div className="check-container">
          {task.isCompleted && <Check size={12} weight="bold" />}
        </div>
      </button>

      <p>{task.content}</p>

      <button 
        className="delete-button" 
        onClick={handleDeleteTask}
        title="Excluir tarefa"
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
