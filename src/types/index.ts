import { Dispatch, FormEvent, SetStateAction } from 'react';
import { TODO_CATEGORIES } from '@/constants';

export interface Todo {
  id: string;
  content: string;
  category: Category;
  isCompleted: boolean;
}

export interface TodoFormFields
  extends Pick<Todo, 'content' | 'category' | 'isCompleted'> {}

export type Category = (typeof TODO_CATEGORIES)[keyof typeof TODO_CATEGORIES];

export interface UseTodoReturnType {
  models: {
    todos: Todo[];
    values: TodoFormFields;
  };
  operations: {
    setTodos: Dispatch<SetStateAction<Todo[]>>;
    setValues: Dispatch<SetStateAction<TodoFormFields>>;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  };
}

export interface TodoFormProps
  extends Pick<UseTodoReturnType['models'], 'values'>,
    Pick<UseTodoReturnType['operations'], 'handleSubmit' | 'setValues'> {}

export interface TodoListProps
  extends Pick<UseTodoReturnType['models'], 'todos'>,
    Pick<UseTodoReturnType['operations'], 'setTodos'> {}

export interface TodoItemProps extends Todo, Pick<TodoListProps, 'setTodos'> {}

export interface StatisticProps
  extends Pick<UseTodoReturnType['models'], 'todos'> {}

export interface StatisticItemProps extends StatisticProps {
  category: Category;
}
