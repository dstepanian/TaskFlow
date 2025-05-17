"use client";

import { Clipboard, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onCreateTodo: () => void;
  filter: string;
}

const messages = {
  all: "Your todo list is empty. Time to be productive!",
  active: "No active tasks. Great job clearing your list!",
  completed: "You haven't completed any tasks yet. Keep going!",
};

const icons = {
  all: Clipboard,
  active: Clipboard,
  completed: Smile,
};

export function EmptyState({ onCreateTodo, filter }: EmptyStateProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const Icon = icons[filter as keyof typeof icons];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="rounded-full bg-secondary p-4 mb-4">
        <Icon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-medium mb-2">No tasks found</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {messages[filter as keyof typeof messages]}
      </p>
      <Button onClick={onCreateTodo}>
        Create your first todo
      </Button>
    </motion.div>
  );
}