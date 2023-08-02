import { Entry } from '..';

export const getObjectFromEntries = <T extends object>(entries: Entry<T>[]): T => {
  return Object.fromEntries(entries) as unknown as T;
};
