import { Encoded } from '@refetched/core-types';
import { encodeBuffer } from '..';

export const encodeString = (decoded: string): Encoded => {
  return encodeBuffer(Buffer.from(decoded));
};
