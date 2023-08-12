import { Keys } from '@refetched/core-types';

export const getKeysFromObject = <T extends object>(obj: T): Keys<T>[] => {
  return Object.keys(obj) as Keys<T>[];
};
