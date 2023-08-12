import { Encoded } from '@refetched/core-types';
import { decodeBuffer } from '..';

describe('GIVEN the function', () => {
  let mockDecoded: Buffer;
  let mockEncoded: Encoded;

  beforeEach(() => {
    mockDecoded = Buffer.from('mockDecoded');
    mockEncoded = '6d6f636b4465636f646564';
  });

  test('THEN it should return the decoded buffer', () => {
    const response = decodeBuffer(mockEncoded);

    expect(response).toEqual(mockDecoded);
  });
});
