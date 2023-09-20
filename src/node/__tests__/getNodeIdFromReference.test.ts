import { getNodeIdFromReference } from '..';

describe('GIVEN the function', () => {
  let mockReference: { __typename: string; id: string };

  beforeEach(() => {
    mockReference = { __typename: 'mockTypename', id: 'mockId' };
  });

  test('THEN it should return the node id', () => {
    const response = getNodeIdFromReference(mockReference);

    expect(response).toEqual('6d6f636b547970656e616d653a6d6f636b4964');
  });
});
