import { Encoded } from '@refetched/core-types';

export const encodeBuffer = (buffer: Buffer): Encoded => {
  return buffer.toString('hex');
};
