import { getObjectFromEntries } from '..';

describe('GIVEN the function', () => {
  let mockObject: object;
  let mockEntries: [string, string][];

  beforeEach(() => {
    mockObject = { mockKey: 'mockValue' };
    mockEntries = [['mockKey', 'mockValue']];
  });

  test('THEN it should return the object from the entries', () => {
    const response = getObjectFromEntries(mockEntries);

    expect(response).toEqual(mockObject);
  });
});
