import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { addAction, deleteAction} from './reducers/todoReducer';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const AddTodo = (text: string) => {
    store.dispatch(addAction({text}));
}
const paintTodo = () => {
    const state = store.getState();
    const todos = state.todo.todo_list;
    if(ul) {ul.innerHTML = '';}

    todos.forEach((todo) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        const span = document.createElement('span');
        btn.innerText = 'X';
        span.classList.add('todo-txt');
        btn.classList.add('btn');
        li.id = todo.id.toString();
        span.innerText = todo.text;
        ul?.appendChild(li);
        li?.appendChild(span);
        li?.appendChild(btn);
    });
};

const onSubmit = (e: Event) => {
    e.preventDefault();
    if(input) {
        const todo = input.value.trim();
        input.value = '';
        AddTodo(todo);
    }
};

const store = configureStore({
    reducer: rootReducer,
});

store.subscribe(paintTodo);

if(form) {
    form.addEventListener('submit', onSubmit);
}
