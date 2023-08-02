import { Keys } from '.';

export type OneKey<T extends object> = {
  [K in Keys<T>]: Record<K, T[K]> & Partial<Record<Exclude<Keys<T>, K>, never>> extends infer O extends object
    ? { [Q in Keys<O>]: O[Q] }
    : never;
}[Keys<T>];
