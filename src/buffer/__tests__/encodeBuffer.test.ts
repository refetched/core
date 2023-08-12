import { Encoded } from '@refetched/core-types';
import { encodeBuffer } from '..';

describe('GIVEN the function', () => {
  let mockDecoded: Buffer;
  let mockEncoded: Encoded;

  beforeEach(() => {
    mockDecoded = Buffer.from('mockDecoded');
    mockEncoded = '6d6f636b4465636f646564';
  });

  test('THEN it should return the encoded buffer', () => {
    const response = encodeBuffer(mockDecoded);

    expect(response).toEqual(mockEncoded);
  });
});
