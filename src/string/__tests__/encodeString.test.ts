import { Encoded } from '@refetched/core-types';
import { encodeString } from '../..';

describe('GIVEN the function', () => {
  let mockDecoded: string;
  let mockEncoded: Encoded;

  beforeEach(() => {
    mockDecoded = 'mockDecoded';
    mockEncoded = '6d6f636b4465636f646564';
  });

  test('THEN it should return the decoded string', () => {
    const response = encodeString(mockDecoded);

    expect(response).toEqual(mockEncoded);
  });
});
