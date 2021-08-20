import React, { FC } from 'react'
import useItemStore from './store'

interface Props {
    todo: Todo;
}

export const TodoListItem: FC<Props> = ({ todo }) => {
    let { toggleTodo, removeTodo } = useItemStore();
    return (
        <li>
            <label htmlFor=""
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
                onDoubleClick={() => { removeTodo(todo) }}
            >
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => toggleTodo(todo)}
                />{' '}
                {todo.text}
            </label>
        </li>
    );
}
