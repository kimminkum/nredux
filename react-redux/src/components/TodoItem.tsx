import React from "react";
import { Todo } from "../reducers/todoReducer";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteAction } from "../reducers/todoReducer";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  todo: Todo;
  deleteTodo: (id: number) => void;
};

const ListTxt = styled.li`
  text-align: center;
  list-style: none;

  a {
    text-decoration: none;
    color: #000;
    position: relative;
    padding: 4px 30px 4px 8px;
    cursor: pointer;

    ::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 1px solid #666;
      width: 100%;
    }

    ::before {
      content: "*";
      position: relative;
      top: 4px;
      left: -8px;
    }
  }

  button {
    background-color: #000;
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const TodoItem: React.FC<Props> = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <>
      <ListTxt>
        <Link to={`/${todo.id}`}>
          <span>{todo.text}</span>
        </Link>
        <button onClick={handleDelete}>X</button>
      </ListTxt>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteTodo: (id: number) => dispatch(deleteAction({ id })),
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);
