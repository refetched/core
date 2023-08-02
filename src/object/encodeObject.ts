import { getStringFromObject } from '.';
import { Encoded, encodeString } from '..';

export const encodeObject = <T extends object>(obj: T): Encoded => {
  return encodeString(getStringFromObject(obj));
};
