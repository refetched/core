import { Entry, JSONObject } from '..';

export const getEntriesFromJSONObject = <T extends JSONObject>(obj: T): Entry<T>[] => {
  return Object.entries(obj) as Entry<T>[];
};
