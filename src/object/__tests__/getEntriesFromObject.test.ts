import { getEntriesFromObject } from '..';

describe('GIVEN the function', () => {
  let mockObject: object;
  let mockEntries: [string, string][];

  beforeEach(() => {
    mockObject = { mockKey: 'mockValue' };
    mockEntries = [['mockKey', 'mockValue']];
  });

  test('THEN it should return the entries from the object', () => {
    const response = getEntriesFromObject(mockObject);

    expect(response).toEqual(mockEntries);
  });
});
