import { getKeysFromObject } from '..';

describe('GIVEN the function', () => {
  let mockObject: object;
  let mockKeys: string[];

  beforeEach(() => {
    mockObject = { mockKey: 'mockValue' };
    mockKeys = ['mockKey'];
  });

  test('THEN it should return the keys from the object', () => {
    const response = getKeysFromObject(mockObject);

    expect(response).toEqual(mockKeys);
  });
});
