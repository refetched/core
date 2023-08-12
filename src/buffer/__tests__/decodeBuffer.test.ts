import { Encoded } from '@refetched/core-types';
import { decodeBuffer } from '..';

describe('GIVEN the function', () => {
  let mockBuffer: Buffer;
  let mockEncoded: Encoded;

  beforeEach(() => {
    mockBuffer = Buffer.from('mockBuffer');
    mockEncoded = '6d6f636b427566666572';
  });

  test('THEN it should return the decoded buffer', () => {
    const response = decodeBuffer(mockEncoded);

    expect(response).toEqual(mockBuffer);
  });
});
