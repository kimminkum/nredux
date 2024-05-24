import React, { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { connect} from "react-redux";
import { Dispatch } from "redux";
import {RootState} from "../store";
import { addAction, deleteAction, Todo} from '../reducers/todoReducer';

const TitleH1 = styled.h1`
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
`;
const InputText = styled.input`
    border: none;
    border-bottom: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
    width: 200px;
`;
const Btn = styled.button`
    background-color: #000;
    color: white;
    border-radius: 0 6px 6px 0;
    padding: 0 20px;
`;

type Props = {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
}

const Home: React.FC<Props> = ({todos, addTodo, deleteTodo}) => {
    const [text, setText] = useState<string>("");
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text.trim());
            setText("");
        }
    };

    const handleDelete = (id: number) => {
        deleteTodo(id);
    };

    return (
        <div>
            <TitleH1>To Do</TitleH1>
            <Form onSubmit={onSubmit}>
                <InputText type="text" value={text} onChange={onChange} />
                <Btn>Add</Btn>
            </Form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => handleDelete(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function getCurrentState(state: RootState) {
    return {
        todos: state.todo,
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        addTodo: (text: string) => dispatch(addAction({text})),
        deleteTodo: (id:number) => dispatch(deleteAction({id})),
    };
}

export default connect(getCurrentState, mapDispatchToProps)(Home);
