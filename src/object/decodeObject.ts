import { getObjectFromString } from '.';
import { Encoded, decodeString } from '..';

export const decodeObject = <T extends object>(encoded: Encoded): T => {
  return getObjectFromString(decodeString(encoded));
};
