import { Encoded } from '@refetched/core-types';
import { decodeBuffer } from '..';

export const decodeString = (encoded: Encoded): string => {
  return decodeBuffer(encoded).toString();
};
