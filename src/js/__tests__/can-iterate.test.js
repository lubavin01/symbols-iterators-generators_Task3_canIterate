import canIterate from '../can-iterate';

test('1', () => {
  expect(canIterate(new Map())).toStrictEqual(true);
  expect(canIterate(new Set())).toStrictEqual(true);
  expect(canIterate(null)).toStrictEqual(false);
  expect(canIterate(10)).toStrictEqual(false);
  expect(canIterate("Netology")).toStrictEqual(true);
});
