import { getStringFromJSONObject } from '.';
import { Encoded, JSONObject, encodeString } from '..';

export const encodeJSONObject = <T extends JSONObject>(obj: T): Encoded => {
  return encodeString(getStringFromJSONObject(obj));
};
