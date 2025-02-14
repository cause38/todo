import { Button } from '@/components/ui/button.tsx';
import { Trash } from '@phosphor-icons/react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { TodoItemProps } from '@/types';

const DeleteButton = ({
  id,
  setTodos,
}: Pick<TodoItemProps, 'id' | 'setTodos'>) => {
  const handleDelete = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className={'h-6 w-6 p-0 [&_svg]:size-3.5'}>
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you delete sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;
