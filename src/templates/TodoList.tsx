import { orderBy } from 'lodash-es';

import { TodoListProps } from '@/types';
import { Card } from '@/components/ui/card.tsx';
import SectionLayout from '@/templates/SectionLayout.tsx';
import TodoItem from '@/templates/TodoItem.tsx';

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const hasTodo = todos.length > 0;
  const orderedTodos = orderBy(todos, ['isCompleted']);
  const completedTodos = todos.filter((todo) => todo.isCompleted);

  const renderer = () => {
    if (!hasTodo)
      return (
        <Card className='flex flex-1 items-center justify-center p-4 text-zinc-500'>
          Nothing to do
        </Card>
      );

    return (
      <ul className='flex max-h-[calc(100svh-24rem)] flex-1 flex-col gap-y-3 overflow-y-auto'>
        {orderedTodos.map((todo) => (
          <TodoItem key={todo.id} setTodos={setTodos} {...todo} />
        ))}
      </ul>
    );
  };

  return (
    <SectionLayout
      title={`today tasks (${completedTodos.length}/${todos.length})`}
      className={'flex flex-1 flex-col'}
    >
      {renderer()}
    </SectionLayout>
  );
};

export default TodoList;
