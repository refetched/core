import { JSONObject } from '..';

export const getJSONObjectFromString = <T extends JSONObject>(str: string): T => {
  return JSON.parse(str);
};
