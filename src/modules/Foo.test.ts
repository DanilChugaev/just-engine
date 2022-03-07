import Foo from './Foo';

let foo: Foo;

describe('foo', () => {
  beforeEach(() => {
    foo = new Foo();
  });

  test('should return number', async () => {
    expect(foo.test()).toEqual(1);
  });
});