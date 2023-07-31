import { Encoded, JSONObject, decodeString } from '..';
import { getJSONObjectFromString } from '.';

export const decodeJSONObject = <T extends JSONObject>(encoded: Encoded): T => {
  return getJSONObjectFromString(decodeString(encoded));
};
