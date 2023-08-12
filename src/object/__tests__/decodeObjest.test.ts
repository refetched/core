import { decodeObject } from '..';

describe('GIVEN the function', () => {
  let mockDecoded: object;
  let mockEncoded: string;

  beforeEach(() => {
    mockDecoded = { mockKey: 'mockValue' };
    mockEncoded = '7b226d6f636b4b6579223a226d6f636b56616c7565227d';
  });

  test('THEN it should return the decoded object', () => {
    const response = decodeObject(mockEncoded);

    expect(response).toEqual(mockDecoded);
  });
});