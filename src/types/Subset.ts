export type Subset<T, U> = {
  [K in keyof T]: K extends keyof U ? T[K] : never;
};
