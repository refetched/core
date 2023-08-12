import { Entry } from '@refetched/core-types';

export const getObjectFromEntries = <T extends object>(entries: Entry<T>[]): T => {
  return Object.fromEntries(entries) as T;
};
