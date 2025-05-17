"use client";

import { AnimatePresence, Reorder } from "framer-motion";
import { Todo, FilterStatus } from "@/lib/types";
import { TodoItem } from "./todo-item";
import { TodoFilter } from "./todo-filter";
import { EmptyState } from "./empty-state";
import { useState, useEffect } from "react";

interface TodoListProps {
  todos: Todo[];
  filter: FilterStatus;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Omit<Todo, "id">>) => void;
  onFilterChange: (filter: FilterStatus) => void;
  onCreateTodo: () => void;
  onReorder: (startIndex: number, endIndex: number) => void;
}

export function TodoList({
  todos,
  filter,
  onToggle,
  onDelete,
  onEdit,
  onFilterChange,
  onCreateTodo,
  onReorder,
}: TodoListProps) {
  const [mounted, setMounted] = useState(false);
  const [reorderTodos, setReorderTodos] = useState(todos);
  
  useEffect(() => {
    setMounted(true);
    setReorderTodos(todos);
  }, [todos]);
  
  // Count todos by status for the filter badges
  const todoCount = {
    all: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length,
  };
  
  // Handle reordering
  const handleReorder = (newOrder: Todo[]) => {
    setReorderTodos(newOrder);
    
    // Find the indexes that changed
    const oldIndex = todos.findIndex(todo => todo.id !== newOrder[0].id);
    const newIndex = 0;
    
    if (oldIndex !== -1 && oldIndex !== newIndex) {
      onReorder(oldIndex, newIndex);
    }
  };

  if (!mounted) return null;

  return (
    <div>
      <TodoFilter 
        currentFilter={filter} 
        onFilterChange={onFilterChange} 
        todoCount={todoCount}
      />
      
      {todos.length === 0 ? (
        <EmptyState onCreateTodo={onCreateTodo} filter={filter} />
      ) : (
        <Reorder.Group 
          as="div" 
          axis="y" 
          values={reorderTodos} 
          onReorder={handleReorder}
        >
          <AnimatePresence initial={false}>
            {reorderTodos.map((todo) => (
              <Reorder.Item 
                key={todo.id} 
                value={todo}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
              >
                <TodoItem
                  todo={todo}
                  onToggle={onToggle}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
      )}
    </div>
  );
}