export type OneKey<T extends object> = {
  [K in keyof T]: Record<K, T[K]> & Partial<Record<Exclude<keyof T, K>, never>> extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never;
}[keyof T];
