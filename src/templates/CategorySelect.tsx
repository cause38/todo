import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { TODO_CATEGORIES } from '@/constants';
import { Category, TodoFormFields, TodoFormProps } from '@/types';

const CategorySelect = ({
  category,
  setValues,
}: Pick<TodoFormFields, 'category'> & Pick<TodoFormProps, 'setValues'>) => {
  const handleChange = (value: string) => {
    setValues((prev) => ({ ...prev, category: value as Category }));
  };

  return (
    <Select value={category} onValueChange={handleChange}>
      <SelectTrigger className='bg-white sm:w-28'>
        <SelectValue placeholder='category' />
      </SelectTrigger>
      <SelectContent>
        {Object.values(TODO_CATEGORIES).map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategorySelect;
