import { Task, TaskItem } from '../TaskItem';
import { ClipboardText } from 'phosphor-react';
import './styles.css';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onToggleTaskCompletion: (taskId: string) => void;
}

export function TaskList({ tasks, onDeleteTask, onToggleTaskCompletion }: TaskListProps) {
  const completedTasksCount = tasks.filter(task => task.isCompleted).length;
  
  return (
    <div className="task-list-container">
      <header>
        <div className="tasks-info">
          <div className="created-tasks">
            Tarefas criadas <span>{tasks.length}</span>
          </div>
          <div className="completed-tasks">
            Concluídas <span>{completedTasksCount} de {tasks.length}</span>
          </div>
        </div>
      </header>

      <div className="task-list">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onDeleteTask={onDeleteTask}
              onToggleTaskCompletion={onToggleTaskCompletion}
            />
          ))
        ) : (
          <div className="empty-list">
            <ClipboardText size={56} />
            <div>
              <p className="bold">Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
