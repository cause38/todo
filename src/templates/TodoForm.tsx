import { ChangeEvent, useRef } from 'react';

import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { TodoFormProps } from '@/types';
import CategorySelect from '@/templates/CategorySelect.tsx';
import useInputFocusEffect from '@/hooks/useInputFocusEffect.ts';
import SectionLayout from '@/templates/SectionLayout.tsx';

const TodoForm = ({ handleSubmit, values, setValues }: TodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { content, category } = values;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, content: e.target.value }));
  };

  useInputFocusEffect(inputRef);

  return (
    <SectionLayout>
      <form
        className='flex w-full flex-col items-center gap-2 sm:flex-row'
        onSubmit={handleSubmit}
      >
        <CategorySelect category={category} setValues={setValues} />
        <div className={'flex w-full flex-1 gap-x-2'}>
          <Input
            type='text'
            ref={inputRef}
            value={content}
            placeholder='To do..'
            className={'bg-white text-sm'}
            onChange={handleChange}
          />
          <Button type='submit'>등록</Button>
        </div>
      </form>
    </SectionLayout>
  );
};

export default TodoForm;
