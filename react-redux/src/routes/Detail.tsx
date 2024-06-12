import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Todo } from "../reducers/todoReducer";

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const todo = useSelector((state: RootState) =>
    id
      ? state.todo.find((todo: Todo) => todo.id === parseInt(id, 10))
      : undefined
  );

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h1>{todo.text}</h1>
      <p>ID: {todo.id}</p>
      <p>
        New Pj Vue 회사에서 새로우 프로젝트 때문에 공부를 권유하여 배우려고
        한다.
      </p>
    </div>
  );
};

export default Detail;
