/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4
};

function result(numbers) {
  return [numbers.a, numbers.b] = [numbers.b, numbers.a];
}

console.log(result(numbers));