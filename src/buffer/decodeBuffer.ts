import { Encoded } from '@refetched/core-types';

export const decodeBuffer = (encoded: Encoded): Buffer => {
  return Buffer.from(encoded, 'hex');
};
