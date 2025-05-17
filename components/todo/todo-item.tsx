"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Pencil, Trash2, Calendar } from "lucide-react";
import { Todo, Category } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoryBadge } from "@/components/ui/category-badge";
import { cn } from "@/lib/utils";
import { TodoEditForm } from "./todo-edit-form";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Omit<Todo, "id">>) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleToggle = () => {
    onToggle(todo.id);
  };
  
  const handleDelete = () => {
    onDelete(todo.id);
  };
  
  const handleEdit = (text: string, category: Category, dueDate?: string) => {
    onEdit(todo.id, { text, category, dueDate });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <motion.div
        layout
        className="border rounded-lg p-4 mb-3 bg-card"
      >
        <TodoEditForm 
          todo={todo} 
          onSave={handleEdit} 
          onCancel={() => setIsEditing(false)} 
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.2 }}
      className="border rounded-lg p-4 mb-3 bg-card hover:shadow-sm transition-shadow"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 pt-1">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={handleToggle}
            className="transition-transform active:scale-90"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p 
                className={cn(
                  "font-medium break-words",
                  todo.completed && "line-through text-muted-foreground"
                )}
              >
                {todo.text}
              </p>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <CategoryBadge category={todo.category} />
                
                {todo.dueDate && (
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {format(new Date(todo.dueDate), "MMM d, yyyy")}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-1 flex-shrink-0">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={handleDelete}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}