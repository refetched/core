import { JSONObject } from '..';

export const getStringFromJSONObject = <T extends JSONObject>(obj: T): string => {
  return JSON.stringify(obj);
};
