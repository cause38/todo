import { PropsWithChildren } from 'react';

import { SectionLayoutProps } from '@/types/Layout.ts';
import { cn } from '@/lib/utils.ts';

const SectionLayout = ({
  title,
  children,
  className,
}: PropsWithChildren<SectionLayoutProps>) => {
  return (
    <section className={cn('flex flex-col gap-y-1.5', className)}>
      {title && (
        <h2 className={'text-bold text-sm uppercase text-zinc-500'}>{title}</h2>
      )}
      {children}
    </section>
  );
};

export default SectionLayout;
