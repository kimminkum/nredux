import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ text: string }>) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            };
            state.unshift(newTodo); // 새로운 todo를 배열의 맨 앞에 추가
        },
        delete: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
    },
});

export const { add: addAction, delete: deleteAction } = todoSlice.actions;
export default todoSlice.reducer;
