import { Keys } from '.';

export type TruthyKeys<T extends object> = Keys<{
  [K in Keys<T> as T[K] extends false | undefined | null ? never : K]: K;
}>;
