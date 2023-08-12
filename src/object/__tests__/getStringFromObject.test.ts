import { getStringFromObject } from '..';

describe('GIVEN the function', () => {
  let mockObject: object;
  let mockString: string;

  beforeEach(() => {
    mockObject = { mockKey: 'mockValue' };
    // istanbul ignore next
    mockString = '{"mockKey":"mockValue"}';
  });

  test('THEN it should return the string from the object', () => {
    const response = getStringFromObject(mockObject);

    expect(response).toEqual(mockString);
  });
});
