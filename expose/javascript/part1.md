1. values added: 20
2. final result: 20
3. Why should you NOT use var? because var ignores block boundaries like if, for so there is no block scope
4. values added: 20
5. This causes an error
result was declared using let inside the if block
let is block-scoped, meaning it only exists inside { }
Line 13 is outside the if block
6. This causes an error
result is declared using const: const result = 0; Then the code tries to reassign it:result = num1 + num2;
7. Nothing is printed
The program already crashed at line 7
So line 13 is never executed
