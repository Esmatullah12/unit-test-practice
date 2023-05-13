import stringLength from "./stringLength";

test('stringLength returns correct length', () => {
  expect(stringLength('')).toThrow('String is empty');
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('123456789')).toBe(9);
  expect(stringLength('1234567890')).toBe(10);
  expect(stringLength('12345678901')).toThrow('String is too long');
});

test('reverseString should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});