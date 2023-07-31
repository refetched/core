import { decodeBuffer, Encoded } from '..';

export const decodeString = (encoded: Encoded): string => {
  return decodeBuffer(encoded).toString();
};
