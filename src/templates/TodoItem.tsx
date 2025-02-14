import { TODO_CATEGORIES_COLOR_THEME } from '@/constants';
import { cn } from '@/lib/utils.ts';
import { Card } from '@/components/ui/card.tsx';
import { TodoItemProps } from '@/types';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import DeleteButton from '@/templates/DeleteButton.tsx';

const TodoItem = ({
  id,
  category,
  content,
  isCompleted,
  setTodos,
}: TodoItemProps) => {
  const handleCompleted = (checked: boolean) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: checked } : todo,
      ),
    );
  };

  return (
    <li>
      <Card
        className={cn(
          'flex flex-col gap-y-2 p-4',
          isCompleted && 'bg-zinc-200',
        )}
      >
        <div className={'flex items-center justify-between gap-x-2'}>
          <span
            className={cn(
              'text- w-fit rounded-md px-2 pb-1 pt-0.5 text-xs uppercase',
              TODO_CATEGORIES_COLOR_THEME[category],
            )}
          >
            {category}
          </span>

          <DeleteButton id={id} setTodos={setTodos} />
        </div>
        <label
          htmlFor={id}
          className={'flex cursor-pointer items-center gap-x-2'}
        >
          <Checkbox
            id={id}
            checked={isCompleted}
            className={cn(isCompleted && 'opacity-50')}
            onCheckedChange={handleCompleted}
          />

          <p className={cn(isCompleted && 'text-zinc-400 line-through')}>
            {content}
          </p>
        </label>
      </Card>
    </li>
  );
};

export default TodoItem;
