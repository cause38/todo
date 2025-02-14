import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const replaceSpace = (str: string) => str.replace(/\s+/g, '');

export const getUUID = () => {
  return self.crypto.randomUUID();
};
