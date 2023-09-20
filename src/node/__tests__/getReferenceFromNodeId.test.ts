import { getReferenceFromNodeId } from '..';

describe('GIVEN the function', () => {
  let mockNodeId: string;

  beforeEach(() => {
    mockNodeId = '6d6f636b547970656e616d653a6d6f636b4964';
  });

  test('THEN it should return the reference', () => {
    const response = getReferenceFromNodeId(mockNodeId);

    expect(response).toEqual({ __typename: 'mockTypename', id: 'mockId' });
  });
});
