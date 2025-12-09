import type { TaskState, Todo } from "@/interfaces";
import type { TaskAction } from "@/types";

export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    /*  */

    switch (action.type) {
        case "ADD_TODO": {
            if (action.payload.trim() === "") return state;

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pendingTodos: state.pendingTodos + 1,
            };
        }

        case "DELETE_TODO": {
            const currentTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
            return {
                ...state,
                todos: currentTodos,
                length: state.todos.length,
                completedTodos: currentTodos.filter(
                    (todo) => todo.completed
                ).length,
                pendingTodos: currentTodos.filter(
                    (todo) => !todo.completed
                ).length,
            };
        }

        case "TOGGLE_TODO": {
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos,
                completedTodos: updatedTodos.filter(
                    (todo) => todo.completed
                ).length,
                pendingTodos: updatedTodos.filter(
                    (todo) => !todo.completed
                ).length,
            };
        }

        default:
            return state;
    }
};
