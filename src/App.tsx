import { useState } from 'react';
import { Header } from './components/Header/Header';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import { Task } from './components/TaskItem/TaskItem';
import './global.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(taskText: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      content: taskText,
      isCompleted: false
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId);
    setTasks(tasksWithoutDeletedOne);
  }

  function handleToggleTaskCompletion(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      
      <TaskForm onAddTask={handleAddTask} />
      
      <TaskList 
        tasks={tasks} 
        onDeleteTask={handleDeleteTask}
        onToggleTaskCompletion={handleToggleTaskCompletion}
      />
    </>
  );
}

export default App;
