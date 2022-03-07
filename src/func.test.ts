import func from './func';

describe('func', () => {
  test('should sum two numbers', async () => {
    const a = 5;
    const b = 3;

    expect(func(a, b)).toEqual(8);
  });
});