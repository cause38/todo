import { Category, TodoFormFields } from '@/types';

export const TODO_CATEGORIES = {
  PERSONAL: 'personal',
  BUSINESS: 'business',
} as const;

export const TODO_CATEGORIES_COLOR_THEME: Record<Category, string> = {
  [TODO_CATEGORIES['PERSONAL']]: 'bg-cyan-100 text-cyan-600',
  [TODO_CATEGORIES['BUSINESS']]: 'bg-violet-100 text-violet-600',
};

export const initialTodoFormValues: TodoFormFields = {
  content: '',
  category: TODO_CATEGORIES['PERSONAL'],
  isCompleted: false,
};
