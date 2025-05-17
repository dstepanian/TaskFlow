"use client";

import { useState, useEffect } from "react";
import { useTodos } from "@/hooks/use-todos";
import { TodoCreate } from "@/components/todo/todo-create";
import { TodoList } from "@/components/todo/todo-list";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isCreateExpanded, setIsCreateExpanded] = useState(false);
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    filter,
    setFilter,
    reorderTodos,
  } = useTodos();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-md mx-auto"
      >
        <div className="flex items-center justify-center mb-8">
          <CheckSquare className="h-8 w-8 mr-2 text-primary" />
          <h1 className="text-3xl font-bold">TaskFlow</h1>
        </div>

        <div className="bg-card rounded-lg shadow-sm border p-5">
          <TodoCreate 
            onAddTodo={(text, category, dueDate) => {
              addTodo(text, category, dueDate);
              setIsCreateExpanded(false);
            }} 
          />
          
          <TodoList
            todos={todos}
            filter={filter}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onFilterChange={setFilter}
            onCreateTodo={() => setIsCreateExpanded(true)}
            onReorder={reorderTodos}
          />
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-6">
          TaskFlow - Stay organized and focused
        </p>
      </motion.div>
    </main>
  );
}