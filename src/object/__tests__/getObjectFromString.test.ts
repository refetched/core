import { getObjectFromString } from '..';

describe('GIVEN the function', () => {
  let mockObject: object;
  let mockString: string;

  beforeEach(() => {
    mockObject = { mockKey: 'mockValue' };
    mockString = '{"mockKey":"mockValue"}';
  });

  test('THEN it should return the object from the string', () => {
    const response = getObjectFromString(mockString);

    expect(response).toEqual(mockObject);
  });
});
