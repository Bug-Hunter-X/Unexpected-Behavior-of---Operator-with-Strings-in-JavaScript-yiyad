function foo(a, b) {
  // Type checking before performing addition
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: Both arguments must be numbers';
  }
  return a + b;
}
console.log(foo(2, 3)); // Output: 5
console.log(foo(2, "3")); // Output: Invalid input: Both arguments must be numbers
console.log(foo("2", 3)); // Output: Invalid input: Both arguments must be numbers
console.log(foo("2", "3")); // Output: Invalid input: Both arguments must be numbers