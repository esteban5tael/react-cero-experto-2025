import { useState, useRef } from "react";

import { Plus, Trash2, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Todo } from "./interfaces";

export const TaskApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [inputValue, setInputValue] = useState("");

    const todoInputRef = useRef<HTMLInputElement>(null);

    const addTodo = () => {
        if (inputValue.trim() === "") return;

        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue.trim(),
            completed: false,
        };

        setTodos([newTodo, ...todos]);
        setInputValue("");
        todoInputRef.current?.focus();
    };

    const toggleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            addTodo();
        }
    };

    const completedCount = todos.filter(
        (todo) => todo.completed
    ).length;
    const totalCount = todos.length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-4">
            <div className="mx-auto max-w-2xl">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Lista de Tareas
                    </h1>
                    <p className="text-slate-300">
                        Mantén tus tareas organizadas y consigue
                        hacerlas
                    </p>
                </div>

                <Card className="mb-6 shadow-lg border-0 bg-slate-800/80 backdrop-blur-sm text-white">
                    <CardContent className="p-6">
                        <div className="flex gap-2">
                            <Input
                                ref={todoInputRef}
                                placeholder="Añade una nueva tarea..."
                                value={inputValue}
                                onChange={(e) =>
                                    setInputValue(e.target.value)
                                }
                                onKeyDown={handleKeyPress}
                                className="flex-1 border-slate-600 focus:border-slate-400 focus:ring-slate-400"
                            />
                            <Button
                                onClick={addTodo}
                                className="bg-slate-700 hover:bg-slate-600 text-white px-4"
                            >
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {totalCount > 0 && (
                    <Card className="mb-6 shadow-lg border-0 bg-slate-800/80 backdrop-blur-sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg font-semibold text-slate-300">
                                Progreso
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="flex items-center justify-between text-sm text-slate-400 mb-2">
                                <span>
                                    {completedCount} de {totalCount}{" "}
                                    completadas
                                </span>
                                <span>
                                    {Math.round(
                                        (completedCount /
                                            totalCount) *
                                            100
                                    )}
                                    %
                                </span>
                            </div>
                            <div className="w-full bg-slate-600 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-300 ease-out"
                                    style={{
                                        width: `${
                                            (completedCount /
                                                totalCount) *
                                            100
                                        }%`,
                                    }}
                                />
                            </div>
                        </CardContent>
                    </Card>
                )}

                <Card className="shadow-lg border-0 bg-slate-800/80 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-slate-300">
                            Tareas
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {todos.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 mx-auto mb-4 bg-slate-700 rounded-full flex items-center justify-center">
                                    <Check className="w-8 h-8 text-slate-500" />
                                </div>
                                <p className="text-slate-400 text-lg mb-2">
                                    No hay tareas
                                </p>
                                <p className="text-slate-500 text-sm">
                                    Añade una tarea arriba para
                                    empezar
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                {todos.map((todo) => (
                                    <div
                                        key={todo.id}
                                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                                            todo.completed
                                                ? "bg-slate-700 border-slate-600"
                                                : "bg-slate-800 border-slate-600 hover:border-slate-500 hover:shadow-sm"
                                        }`}
                                    >
                                        <Checkbox
                                            checked={todo.completed}
                                            onCheckedChange={() =>
                                                toggleTodo(todo.id)
                                            }
                                            className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                                        />
                                        <span
                                            className={`flex-1 transition-all duration-200 ${
                                                todo.completed
                                                    ? "text-slate-400 line-through"
                                                    : "text-white"
                                            }`}
                                        >
                                            {todo.text}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() =>
                                                deleteTodo(todo.id)
                                            }
                                            className="text-slate-400 hover:text-red-500 hover:bg-red-900 h-8 w-8 p-0"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
