export type Subset<T extends object, U extends object> = {
  [K in keyof T]: K extends keyof U ? T[K] : never;
};
