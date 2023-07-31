export type TruthyKeys<T> = keyof {
  [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
};
