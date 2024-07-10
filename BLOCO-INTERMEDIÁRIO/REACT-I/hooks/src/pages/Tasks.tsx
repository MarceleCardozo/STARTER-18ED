import { useEffect, useState } from "react";
import BeautifulButton from "../components/button";
import BeautifulParagraph from "../components/paragraph";
import BeautifulTitle from "../components/title";
import { Task } from "../types/Task";
import { v4 as uuid } from "uuid";
import Input from "../components/input/styled";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask: Task = {
        id: uuid(),
        text: newTaskText,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTaskText("");
    }
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <BeautifulTitle>Tarefas</BeautifulTitle>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input
          type="text"
          placeholder="Adicione uma tarefa..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <BeautifulButton onClick={handleAddTask}>Adicionar</BeautifulButton>
      </div>
      <div>
        {tasks.map((task) => (
          <BeautifulParagraph key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.text}
            </span>
            <BeautifulButton onClick={() => handleDeleteTask(task.id)}>
              Excluir
            </BeautifulButton>
          </BeautifulParagraph>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
