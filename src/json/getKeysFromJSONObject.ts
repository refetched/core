import { Key } from '..';

export const getKeysFromJSONObject = <T extends object>(jsonObject: T): Key<T>[] => {
  return Object.keys(jsonObject) as Key<T>[];
};
