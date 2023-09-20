import { Reference } from '@refetched/core-types';
import { decodeString } from '..';

export const getReferenceFromNodeId = (nodeId: string): Reference => {
  const [__typename, id] = decodeString(nodeId).split(':');
  return { __typename, id };
};
