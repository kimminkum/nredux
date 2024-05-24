import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { addAction, deleteAction} from './reducers/todoReducer';

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export {addAction, deleteAction};