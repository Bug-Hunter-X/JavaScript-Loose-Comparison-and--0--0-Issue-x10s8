# JavaScript Loose Comparison and -0/+0 Issue

This repository demonstrates a subtle bug in JavaScript related to loose comparison (==) and the handling of -0 and +0.  Loose comparison treats -0 and +0 as equal, which can lead to unexpected behavior in functions that perform calculations or conditional checks on numerical inputs. This issue is highlighted in `bug.js`.

A solution, utilizing strict comparison (===), is provided in `bugSolution.js`. Strict comparison distinguishes between -0 and +0, resolving the unexpected behavior.

## How to reproduce:

1. Clone the repository.
2. Run `bug.js` and observe the unexpected results from the `foo` function when using -0.
3. Run `bugSolution.js` to see the corrected behavior using strict equality.

## Importance of Strict Equality:

Always prioritize using strict equality (===) over loose equality (==) in JavaScript, particularly when working with numerical values. Strict equality ensures that both the value and the type are compared, reducing the possibility of such subtle errors.