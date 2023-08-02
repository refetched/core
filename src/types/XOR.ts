import { Without } from '.';

export type XOR<T extends object, U extends object> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
