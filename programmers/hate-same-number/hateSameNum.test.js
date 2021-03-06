const solution = arr => {
  return arr.reduce(reducer, []);
}

const reducer = (acc, value) => {
  (acc[acc.length-1] !== value) && acc.push(value)
  return acc;
}

const solution2 = (arr) => arr.filter((v, index) => v != arr[index + 1]);

test('solution', () => {
  expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
})
