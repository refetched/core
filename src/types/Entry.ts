import { Keys } from '.';

export type Entry<T extends object> = {
  [K in Keys<T>]-?: [K, T[K]];
}[Keys<T>];
