"use client";

import { FilterStatus } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TodoFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  todoCount: {
    all: number;
    active: number;
    completed: number;
  };
}

export function TodoFilter({ currentFilter, onFilterChange, todoCount }: TodoFilterProps) {
  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="flex items-center justify-between border-b pb-4 mb-6 overflow-x-auto">
      <div className="flex">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={cn(
              "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              currentFilter === filter.value
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
            {todoCount[filter.value] > 0 && (
              <span className="ml-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs">
                {todoCount[filter.value]}
              </span>
            )}
            {currentFilter === filter.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}