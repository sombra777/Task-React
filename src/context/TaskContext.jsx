import { createContext, useState, useEffect } from "react";
import { tareas } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const eliminarTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  };

  useEffect(() => {
    setTasks(tareas);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        eliminarTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
