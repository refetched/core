import { RequiredKeys, TruthyKeys } from '.';

export type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>;
