import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { StatisticItemProps } from '@/types';
import { Progress } from '@/components/ui/progress.tsx';

const StatisticItem = ({ todos, category }: StatisticItemProps) => {
  const categoryTodos = todos.filter((todo) => todo.category === category);
  const completedTodos = categoryTodos.filter(({ isCompleted }) => isCompleted);
  const categoryTodoLength = categoryTodos.length;
  const completedLength = completedTodos.length;
  const completedPercentage = (completedLength / categoryTodoLength) * 100;

  return (
    <li className={'min-w-60'}>
      <Card className={'w-full'}>
        <CardHeader>
          <CardTitle className={'capitalize'}>{category}</CardTitle>
          <CardDescription>
            {completedLength} / {categoryTodoLength}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Progress value={completedPercentage} />
        </CardFooter>
      </Card>
    </li>
  );
};

export default StatisticItem;
