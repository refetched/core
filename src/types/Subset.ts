import { Keys } from '.';

export type Subset<T extends object, U extends object> = {
  [K in Keys<T>]: K extends Keys<U> ? T[K] : never;
};
