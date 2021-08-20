import React, { FC } from 'react'
import useItemStore from './store';
import { TodoListItem } from './TodoListItem'



export const TodoList: FC = () => {
    let { todos } = useItemStore();
    return (
        <ul>
            {todos.map(todo => <TodoListItem key={todo.text} todo={todo} />)}
        </ul>
    );
}
