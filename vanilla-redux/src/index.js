import { configureStore, createSlice } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { incrementAction, decrementAction } from './reducers/counterReducer';
document.addEventListener('DOMContentLoaded', () => {
    const add = document.getElementById('add');
    const minus = document.getElementById('minus');
    const number = document.querySelector('span');

    if (!add || !minus || !number) {
        console.error('One or more DOM elements not found');
        return;
    }

    number.innerText = 0;

    const store = configureStore({
        reducer: rootReducer,
    });

    const onChange = () => {
        number.innerText = store.getState().counter.count;
    };

    store.subscribe(onChange);

    const handleAdd = () => {
        store.dispatch(incrementAction());
    };
    const handleMinus = () => {
        store.dispatch(decrementAction());
    };

    add.addEventListener('click', handleAdd);
    minus.addEventListener('click', handleMinus);
});