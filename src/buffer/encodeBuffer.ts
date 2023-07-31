import { Encoded } from '..';

export const encodeBuffer = (buffer: Buffer): Encoded => {
  return buffer.toString('hex');
};
