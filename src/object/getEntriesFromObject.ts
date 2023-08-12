import { Entry } from '@refetched/core-types';

export const getEntriesFromObject = <T extends object>(obj: T): Entry<T>[] => {
  return Object.entries(obj) as Entry<T>[];
};
