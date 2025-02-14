import { TODO_CATEGORIES } from '@/constants';
import { StatisticProps } from '@/types';
import SectionLayout from '@/templates/SectionLayout.tsx';
import StatisticItem from '@/templates/StatisticItem.tsx';

const Statistic = ({ todos }: StatisticProps) => {
  return (
    <SectionLayout title={'category statistics'}>
      <ul className='flex max-w-full gap-x-4 overflow-x-auto'>
        {Object.values(TODO_CATEGORIES).map((category) => (
          <StatisticItem key={category} category={category} todos={todos} />
        ))}
      </ul>
    </SectionLayout>
  );
};

export default Statistic;
