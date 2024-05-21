import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: { todo_list: [] },
    reducers: {
        add: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            }
            state.todo_list = [newTodo, ...state.todo_list];
        },
        delete: (state, action) => {
            state.todo_list = state.todo_list.filter(
                todo => todo.id !== action.payload.id
            );
        },
    }
});

export const { add: addAction, delete: deleteAction } = todoSlice.actions;
export default todoSlice.reducer;
