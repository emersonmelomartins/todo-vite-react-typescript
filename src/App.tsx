import { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Clipboard, PlusCircle } from "phosphor-react";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import styles from "./App.module.css";
import "./global.css";
import { Task } from "./components/Task";
import { TaskInfo } from "./components/TaskInfo";
import { TaskList } from "./components/TaskList";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

function App() {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const isTaskDescriptionEmpty = newTaskDescription.trim() === "";

  function submitNewTask(e: FormEvent) {
    e.preventDefault();

    const newTask: Task = {
      id: uuid(),
      description: newTaskDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskDescription("");
  }

  function onTaskChangeCompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function onTaskDeleted(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <section className={styles.taskContainer}>
        <form onSubmit={submitNewTask} className={styles.taskForm}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            required
          />

          <Button
            type="submit"
            icon={<PlusCircle />}
            value="Criar"
            disabled={isTaskDescriptionEmpty}
          />
        </form>

        <TaskInfo tasks={tasks} />

        <TaskList
          onTaskChangeCompleted={onTaskChangeCompleted}
          onTaskDeleted={onTaskDeleted}
          tasks={tasks}
        />
      </section>
    </div>
  );
}

export default App;
