import { JSONObject, Key } from '.';

export type Entry<T extends JSONObject> = {
  [K in Key<T>]-?: [K, T[K]];
}[Key<T>];
