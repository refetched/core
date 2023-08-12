import { Encoded } from '@refetched/core-types';
import { getStringFromObject } from '.';
import { encodeString } from '..';

export const encodeObject = <T extends object>(obj: T): Encoded => {
  return encodeString(getStringFromObject(obj));
};
