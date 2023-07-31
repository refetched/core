import { Key } from '.';

export type Entry<T extends object> = {
  [K in Key<T>]-?: [K, T[K]];
}[Key<T>];
