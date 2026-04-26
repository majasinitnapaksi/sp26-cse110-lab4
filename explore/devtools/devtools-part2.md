# DevTools Part 2

## What was the bug?
The inputs were treated as strings, so addition resulted in string concatenation instead of numeric addition.

## How would you fix it?
Convert the inputs to numbers using Number() before adding them.
