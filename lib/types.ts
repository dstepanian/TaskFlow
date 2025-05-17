export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: Category;
  createdAt: string;
  dueDate?: string;
}

export type Category = 'work' | 'personal' | 'shopping' | 'other';

export type FilterStatus = 'all' | 'active' | 'completed';

export const categoryColors: Record<Category, string> = {
  work: 'bg-blue-500',
  personal: 'bg-purple-500',
  shopping: 'bg-emerald-500',
  other: 'bg-amber-500',
};