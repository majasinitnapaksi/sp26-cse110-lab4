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
