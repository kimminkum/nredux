import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TodoState {
    todo_list:Todo[];
}

const initialState: TodoState = {
    todo_list: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{text:string}>) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            }
            state.todo_list = [newTodo , ...state.todo_list];
        },
        delete: (state, action: PayloadAction<{ id: number }>) => {
            state.todo_list = state.todo_list.filter(
                todo => todo.id !== action.payload.id
            );
        },
    }
});

export const { add: addAction, delete: deleteAction } = todoSlice.actions;
export default todoSlice.reducer;
