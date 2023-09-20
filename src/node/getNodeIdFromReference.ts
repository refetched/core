import { encodeString } from '..';

export const getNodeIdFromReference = (ref: { __typename: string; id: string }): string => {
  return encodeString(`${ref.__typename}:${ref.id}`);
};
