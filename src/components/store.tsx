import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface Todos {
    todos: Todo[],
    toggleTodo: ToggleTodo,
    removeTodo: RemoveTodo,
    addTodo: AddTodo
}

let useItemStore = create<Todos>(persist(devtools((set) => ({
    todos: [
        { text: 'start app making', complete: true }
    ],
    toggleTodo: (selectedTodo: Todo) => {
        set((state) => ({
            todos: state.todos.map(todo => todo === selectedTodo
                ? ({ ...todo, complete: !todo.complete } as Todo)
                : todo)
        }))
    },
    removeTodo: (selectedTodo: Todo) => {
        set((state) => ({
            todos: state.todos.filter(todo => todo !== selectedTodo)
        }))
    },
    addTodo: (text: string) => {
        set(state => ({
            todos: [
                ...state.todos,
                { text, complete: false } as Todo
            ]
        }))
    }
})), { name: 'Learn' }))

export default useItemStore