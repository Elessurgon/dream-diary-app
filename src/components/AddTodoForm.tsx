import React, { FC, useState } from "react";
import useItemStore from "./store";


export const AddTodoForm: FC = () => {
    const [text, setText] = useState('')
    const { addTodo } = useItemStore()

    return (
        <form >
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                }}
            >AddTodo
            </button>
        </form>
    );
}