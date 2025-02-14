import { HTMLAttributes } from 'react';

export interface SectionLayoutProps
  extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  title?: string;
}
