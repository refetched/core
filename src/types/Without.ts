import { Keys } from '.';

export type Without<T extends object, U extends object> = { [P in Exclude<Keys<T>, Keys<U>>]?: never };
