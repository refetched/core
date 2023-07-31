import { Entry, JSONObject } from '..';

export const getJSONObjectFromEntries = <T extends JSONObject>(entries: Entry<T>[]): T => {
  return Object.fromEntries(entries) as unknown as T;
};
