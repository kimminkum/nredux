import React from 'react';
import { Todo } from '../reducers/todoReducer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteAction } from '../reducers/todoReducer';

type Props = {
    todo: Todo;
    deleteTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, deleteTodo }) => {
    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <li>
            <span>{todo.text}</span>
            <button onClick={handleDelete}>X</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: { todo: Todo }) => {
    return {
        deleteTodo: (id: number) => dispatch(deleteAction({ id })),
    };
};

export default connect(null, mapDispatchToProps)(TodoItem);
