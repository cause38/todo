import { FormEvent, useState } from 'react';

import { initialTodoFormValues } from '@/constants';
import { Todo, TodoFormFields, UseTodoReturnType } from '@/types';
import { getUUID, replaceSpace } from '@/lib/utils.ts';
import { isEmpty } from 'lodash-es';

const useTodo = (): UseTodoReturnType => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [values, setValues] = useState<TodoFormFields>(initialTodoFormValues);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmpty(replaceSpace(values.content))) return;

    setTodos((prev) => [...prev, { ...values, id: getUUID() }]);
    setValues((prev) => ({ ...prev, content: '' }));
  };

  return {
    models: { todos, values },
    operations: { setTodos, handleSubmit, setValues },
  };
};

export default useTodo;
