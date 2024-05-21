import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import toDoReducer from './toDoReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: toDoReducer
});

export default rootReducer;