import { decodeString } from '..';

export const getReferenceFromNodeId = (nodeId: string): { __typename: string; id: string } => {
  const [__typename, id] = decodeString(nodeId).split(':');
  return { __typename, id };
};
