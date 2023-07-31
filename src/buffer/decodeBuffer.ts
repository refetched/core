import { Encoded } from '..';

export const decodeBuffer = (encoded: Encoded): Buffer => {
  return Buffer.from(encoded, 'hex');
};
