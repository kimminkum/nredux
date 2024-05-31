import { Todo } from "./reducers/todoReducer";

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodosFromLocalStorage = (): Todo[] => {
  const todosJSON = localStorage.getItem("todos");
  return todosJSON ? JSON.parse(todosJSON) : [];
};
