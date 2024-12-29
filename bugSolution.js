function foo(a, b) {
  if (a === 0 || b === 0) return 0; //this will not work for -0
  if (a === -0 || b === -0) return 0; //this is a better solution
  return a + b;
}