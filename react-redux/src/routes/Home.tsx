import React, { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { connect} from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../store";
import { addAction, deleteAction, Todo} from '../reducers/todoReducer';
import TodoItem from "../components/TodoItem";

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

    return (
        <div>
            <TitleH1>To Do</TitleH1>
            <Form onSubmit={onSubmit}>
                <InputText type="text" value={text} onChange={onChange} />
                <Btn>Add</Btn>
            </Form>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </div>
    );
}

function mapStateToProps(state: RootState) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
