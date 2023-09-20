import { Reference } from '@refetched/core-types';
import { encodeString } from '..';

export const getNodeIdFromReference = (ref: Reference): string => {
  return encodeString(`${ref.__typename}:${ref.id}`);
};
