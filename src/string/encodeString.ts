import { encodeBuffer, Encoded } from '..';

export const encodeString = (decoded: string): Encoded => {
  return encodeBuffer(Buffer.from(decoded));
};
