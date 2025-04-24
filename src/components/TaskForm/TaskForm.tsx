import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import './styles.css';

interface TaskFormProps {
  onAddTask: (taskText: string) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    if (newTaskText.trim()) {
      onAddTask(newTaskText);
      setNewTaskText('');
    }
  }

  return (
    <form className="task-form" onSubmit={handleCreateNewTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
