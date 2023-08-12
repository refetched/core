import { Encoded } from '@refetched/core-types';
import { getObjectFromString } from '.';
import { decodeString } from '..';

export const decodeObject = <T extends object>(encoded: Encoded): T => {
  return getObjectFromString(decodeString(encoded));
};
