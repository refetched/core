import { Keys } from '.';

export type RequiredKeys<T extends object> = {
  [K in Keys<T>]-?: object extends Pick<T, K> ? never : K;
}[Keys<T>];
