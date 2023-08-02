import { RequiredKeys, TruthyKeys } from '.';

export type TrueKeys<T extends object> = TruthyKeys<Pick<T, RequiredKeys<T>>>;
