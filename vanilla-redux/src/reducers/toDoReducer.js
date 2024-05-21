import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: { todo_list: [] },
    reducers: {
        add: (state, action) => {
            state.todo_list = [...state.todo_list, action.payload];
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
