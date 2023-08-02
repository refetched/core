export type Without<T extends object, U extends object> = { [P in Exclude<keyof T, keyof U>]?: never };
