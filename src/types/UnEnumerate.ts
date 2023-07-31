export type UnEnumerate<T> = T extends Array<infer U> ? U : T;
