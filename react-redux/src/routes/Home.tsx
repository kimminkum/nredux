import React, { ChangeEvent, useState } from "react";
import { styled} from "styled-components";

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

const Home: React.FC = () => {
    const [text, setText] = useState<string>("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <TitleH1>To Do</TitleH1>
            <Form>
                <InputText type="text" value={text} onChange={onChange} />
                <Btn>Add</Btn>
            </Form>
            <ul></ul>
        </div>
    );
}

export default Home;