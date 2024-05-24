import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getTodosFromLocalStorage, saveTodosToLocalStorage } from '../storage'; 

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
export interface TodoState {
    todo_list:Todo[];
}

const initialState: Todo[] = getTodosFromLocalStorage(); // 수정된 부분

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state , action: PayloadAction<{text:string}>) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            }
            state.unshift(newTodo); // 새로운 todo를 배열의 맨 앞에 추가
            saveTodosToLocalStorage(state); // 로컬 스토리지에 저장
        },
        delete: (state, action: PayloadAction<{ id: number }>) => {
            state = state.filter(todo => todo.id !== action.payload.id);
            saveTodosToLocalStorage(state); // 로컬 스토리지에 저장
        },
    }
});

export const { add: addAction, delete: deleteAction } = todoSlice.actions;
export default todoSlice.reducer;
