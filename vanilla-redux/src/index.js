import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { incrementAction, decrementAction } from "./reducers/counterReducer";
import { addAction, deleteAction } from "./reducers/toDoReducer";

let txt = "HELLO WORLD!";

let index = 0;

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function typing() {
  document.querySelector("#reading").textContent += txt[index++];
  if (index > txt.length) {
    document.querySelector("#reading").textContent = "";
    index = 0;
    sleep(3000);
  }
}
setInterval(typing, 200);

document.addEventListener("DOMContentLoaded", () => {
  const add = document.getElementById("add");
  const minus = document.getElementById("minus");
  const number = document.getElementById("count");
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");
  number.innerText = 0;

  const onChange = () => {
    number.innerText = store.getState().counter.count;
  };

  const addTodo = (text) => {
    store.dispatch(addAction({ text }));
  };

  const deleteTodo = (e) => {
    console.log(e.target.parentNode.id);
    const todoId = e.target.parentNode.id;
    store.dispatch(deleteAction({ id: parseInt(todoId) }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const todo = input.value.trim();
    input.value = "";
    addTodo(todo);
  };

  const paintTodo = () => {
    const state = store.getState();
    const todos = state.todo.todo_list;
    ul.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      const span = document.createElement("span");
      btn.innerText = "DEL";
      span.classList.add("todo-span");
      btn.classList.add("btn");
      btn.addEventListener("click", deleteTodo);
      li.id = todo.id;
      span.innerText = todo.text;
      ul.appendChild(li);
      li.appendChild(span);
      li.appendChild(btn);
    });
  };

  const store = configureStore({
    reducer: rootReducer,
  });

  store.subscribe(paintTodo);
  store.subscribe(onChange);

  form.addEventListener("submit", onSubmit);
  const handleAdd = () => {
    store.dispatch(incrementAction());
  };
  const handleMinus = () => {
    store.dispatch(decrementAction());
  };

  add.addEventListener("click", handleAdd);
  minus.addEventListener("click", handleMinus);
});
