1. At line 12, the code prints:

3

Why:

i was declared with var inside the for loop:

for (var i = 0; i < prices.length; i++)

Because var is function-scoped, i is still accessible outside the loop.

The array has 3 items:

[100, 200, 300]

So the loop runs while i is 0, 1, and 2. After the last loop, i++ makes i become 3, then the condition i < prices.length becomes false.

2. ### Answer

At line 13, the code prints:


150


### Explanation

The variable `discountedPrice` is declared using `var` inside the `for` loop:

```js
var discountedPrice = prices[i] * (1 - discount);

Because var is function-scoped, discountedPrice is accessible outside the loop.

The loop processes the array:

[100, 200, 300]

With a discount of 0.5, each iteration computes:

100 → 50
200 → 100
300 → 150

Since discountedPrice is reassigned each iteration, after the loop finishes it holds the last computed value, which is:

150

So when line 13 runs:

console.log(discountedPrice);

it prints:

150

3. ### Answer

At line 14, the code prints:


150


### Explanation

The variable `finalPrice` is declared using `var`:

```js
var finalPrice = 0;

Because var is function-scoped, finalPrice is accessible both inside and outside the loop.

Inside the loop, finalPrice is updated in every iteration:

finalPrice = Math.round(discountedPrice * 100) / 100;

The loop processes:

[100, 200, 300]

With a discount of 0.5, the computed values are:

100 → 50
200 → 100
300 → 150

Since finalPrice is overwritten each time, after the loop ends it holds the last computed value, which is:

150

So when line 14 runs:

console.log(finalPrice);

it prints:

150

4. ### Answer

The function returns:


[50, 100, 150]


### Explanation

The function iterates through the `prices` array:

```js
[100, 200, 300]

For each price, it applies a 50% discount:

discountedPrice = prices[i] * (1 - discount)

With discount = 0.5, the calculations are:

100 → 50
200 → 100
300 → 150

Each result is rounded (no change here) and pushed into the discounted array:

discounted.push(finalPrice);

So the final array becomes:

[50, 100, 150]

5. ### Answer

At line 12, a **ReferenceError** occurs:


ReferenceError: i is not defined


### Explanation

The variable `i` is declared using `let` inside the `for` loop:

```js
for (let i = 0; i < prices.length; i++)

Since let is block-scoped, i only exists inside the loop and is not accessible outside of it.

Therefore, calling console.log(i); at line 12 causes an error.

6. ### Answer

At line 13, a **ReferenceError** occurs:


ReferenceError: discountedPrice is not defined


### Explanation

The variable `discountedPrice` is declared using `let` inside the `for` loop:

```js
let discountedPrice = prices[i] * (1 - discount);

Since let is block-scoped, discountedPrice only exists inside the loop and is not accessible outside of it.

Therefore, calling console.log(discountedPrice); at line 13 causes an error.

7. ### Answer

At line 14, the code prints:


150


### Explanation

The variable `finalPrice` is declared with `let` **outside** the loop:

```js
let finalPrice = 0;

So it is accessible after the loop.

Inside the loop, finalPrice is updated each iteration. With input:

[100, 200, 300] and discount = 0.5

The values become:

50
100
150

After the loop, finalPrice holds the last value (150).

8. ### Answer

The function returns:


[50, 100, 150]


### Explanation

The function loops through:

```js
[100, 200, 300]

With a discount of 0.5, each price becomes:

100 → 50
200 → 100
300 → 150

Each result is rounded and pushed into the discounted array.

9. ### Answer

At line 11, a **ReferenceError** occurs:


ReferenceError: i is not defined


### Explanation

The variable `i` is declared using `let` in the `for` loop:

```js
for (let i = 0; i < length; i++)

Since let is block-scoped, i only exists inside the loop and is not accessible outside of it.

Therefore, console.log(i); at line 11 causes an error.

10. ### Answer

At line 12, the code prints:


3


### Explanation

The variable `length` is declared using `const`:

```js
const length = prices.length;

Since length is defined in the function scope, it is accessible outside the loop.

The array:

[100, 200, 300]

has a length of 3, so:

console.log(length);

prints:

3

11. ### Answer

The function returns:


[50, 100, 150]


### Explanation

The function iterates through:

```js
[100, 200, 300]

With a discount of 0.5, each price becomes:

100 → 50
200 → 100
300 → 150

Each value is pushed into the discounted array.

12. ### Answer

A. Accessing the `name` property:
```js
student.name

B. Accessing the Grad Year property:

student['Grad Year']

C. Calling the greeting function:

student.greeting()

D. Accessing the name of Favorite Teacher:

student['Favorite Teacher'].name

E. Accessing index 0 of courseLoad:

student.courseLoad[0]

### 13. Arithmetic

A. `'3' + 2`  
**Output:** `'32'`  
**Explanation:** Number `2` is converted to string → string concatenation.

B. `'3' - 2`  
**Output:** `1`  
**Explanation:** `-` forces numeric conversion → `'3'` → `3`.

C. `3 + null`  
**Output:** `3`  
**Explanation:** `null` → `0`.

D. `'3' + null`  
**Output:** `'3null'`  
**Explanation:** `null` → `'null'` → string concatenation.

E. `true + 3`  
**Output:** `4`  
**Explanation:** `true` → `1`.

F. `false + null`  
**Output:** `0`  
**Explanation:** `false` → `0`, `null` → `0`.

G. `'3' + undefined`  
**Output:** `'3undefined'`  
**Explanation:** `undefined` → `'undefined'`.

H. `'3' - undefined`  
**Output:** `NaN`  
**Explanation:** `undefined` → `NaN`, math with `NaN` → `NaN`.

---

### 14. Comparison

A. `2 > 1`  
**Output:** `true`  
**Explanation:** Normal numeric comparison.

B. `2 < '12'`  
**Output:** `true`  
**Explanation:** `'12'` → `12`.

C. `2 == '2'`  
**Output:** `true`  
**Explanation:** `==` does type coercion.

D. `2 === '2'`  
**Output:** `false`  
**Explanation:** `===` checks type + value.

E. `true == 2`  
**Output:** `false`  
**Explanation:** `true` → `1`, so `1 == 2`.

F. `true === Boolean(2)`  
**Output:** `true`  
**Explanation:** `Boolean(2)` → `true`.

---

### 15. Difference between `==` and `===`

- `==` (loose equality): converts types before comparing  
- `===` (strict equality): compares value **and** type without conversion  

**Example:**
```js
2 == '2'   // true
2 === '2'  // false
