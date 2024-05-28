import React from "react";
import { Todo } from "../reducers/todoReducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteAction } from "../reducers/todoReducer";
import { Link } from "react-router-dom";

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
      <Link to={`/${todo.id}`}>
        <span>{todo.text}</span>
        <button onClick={handleDelete}>X</button>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteTodo: (id: number) => dispatch(deleteAction({ id })),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
