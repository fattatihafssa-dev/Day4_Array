# Day 5 — Functions & Scope: complete challenge catalogue

**Topics:** declaring functions, parameters, return values, reuse, arrow functions, block scope, function scope, and closures.

## Functions basics

### 1. Simple add function — Easy
**Context:** A function receives parameters, computes a value, and returns it.  
**Description:** Write `add(a, b)` that returns the sum, call it, and print the result.  
**Sample output:**
```text
5
```

### 2. Function with one parameter — Easy
**Context:** A parameter is a local input to a function.  
**Description:** Write `triple(n)` that returns `n * 3`.  
**Sample output:**
```text
15
```

### 3. No return means `undefined` — Easy
**Context:** `console.log` displays a value but does not return one.  
**Description:** Create `logOnly()` that prints `"done"` without returning anything, then print the result of calling it.  
**Sample output:**
```text
done
undefined
```

### 4. Default parameter — Easy
**Context:** A default parameter is used when an argument is missing.  
**Description:** Write `greet(name = "guest")` that returns a greeting.  
**Sample output:**
```text
Hello, guest
```

### 5. Boolean-returning function — Medium
**Context:** A comparison already produces a boolean; it can be returned directly.  
**Description:** Write `isPositive(n)` that returns true only when `n > 0`.  
**Sample output:**
```text
true
```

### 6. Function containing a loop — Medium
**Context:** Variables declared inside a function are local to that function.  
**Description:** Write `sumUpTo(n)` that returns the sum from 1 through `n` using a loop.  
**Sample output:**
```text
sumUpTo(5) → 15
```

### 7. Function calling another function — Medium
**Context:** Small reusable functions can be combined to solve a larger problem.  
**Description:** Write `square(n)`, then write `sumOfSquares(a, b)` that calls `square` twice.  
**Sample output:**
```text
sumOfSquares(2, 3) → 13
```

### 8. Maximum of three values — Medium
**Context:** A function may use local variables and comparisons to build a result.  
**Description:** Write `maxOfThree(a, b, c)` without `Math.max`.  
**Sample output:**
```text
maxOfThree(4, 9, 2) → 9
```

### 9. Validate before computing — Hard
**Context:** Check dangerous or invalid input before performing an operation.  
**Description:** Write `safeDivide(a, b)` that divides values, but returns `"Cannot divide by zero"` when `b` is zero.  
**Sample output:**
```text
safeDivide(10, 0) → Cannot divide by zero
```

### 10. Refactor repeated logic — Hard
**Context:** Repeated code should become one reusable function.  
**Description:** Replace repeated 1-to-100 checks with `isInRange(n)`.  
**Sample output:**
```text
isInRange(75) → true
isInRange(120) → false
```

### 11. Return a formatted string — Hard
**Context:** A function can combine data into a reusable display format.  
**Description:** Write `formatPrice(name, price)` that returns text such as `"Book: $15"`.  
**Sample output:**
```text
Book: $15
```

### 12. Small function toolkit — Extreme
**Context:** Functions should reuse existing logic rather than duplicate it.  
**Description:** Create `isEven(n)`, `isOdd(n)` using `isEven`, and `describeParity(n)` that returns `"even"` or `"odd"`.  
**Sample output:**
```text
describeParity(7) → odd
```

## Arrow functions and scope

### 13. Convert to an arrow function — Easy
**Context:** A simple one-expression function can use arrow syntax.  
**Description:** Convert `function double(n) { return n * 2; }` into an arrow function.  
**Sample output:**
```text
double(4) → 8
```

### 14. Implicit return — Easy
**Context:** An arrow function without braces returns its expression automatically.  
**Description:** Write `isNegative(n)` with an implicit return.  
**Sample output:**
```text
isNegative(-3) → true
```

### 15. Block scope check — Easy
**Context:** A `let` variable declared inside braces exists only in that block.  
**Description:** Declare `let x = 1` inside `if (true) {}` and determine whether it is accessible after the block.  
**Sample output:**
```text
ReferenceError: x is not defined
```

### 16. Arrow function with two parameters — Easy
**Context:** Multiple arrow-function parameters are placed inside parentheses.  
**Description:** Write `multiply(a, b)` as an arrow function.  
**Sample output:**
```text
multiply(4, 5) → 20
```

### 17. Multi-statement arrow function — Medium
**Context:** Arrow functions with multiple statements need braces and an explicit `return`.  
**Description:** Write `describeAge(age)` that stores `"minor"` or `"adult"` locally, then returns a sentence.  
**Sample output:**
```text
describeAge(20) → You are a(n) adult
```

### 18. Predict a function-scope error — Medium
**Context:** A variable declared inside a function is unavailable outside it.  
**Description:** Predict what happens when `result` is declared in `calc()` but `console.log(result)` runs outside `calc()`.  
**Sample output:**
```text
ReferenceError: result is not defined
```

### 19. Loop-variable scope — Medium
**Context:** A `let` variable declared in a `for` loop exists only inside that loop.  
**Description:** Explain why using `console.log(i)` after `for (let i = 0; i < 5; i++)` causes an error.  
**Sample output:**
```text
ReferenceError: i is not defined
```

### 20. Arrow function inside a function — Medium
**Context:** A function can return another function.  
**Description:** Write `makeGreeter()` that returns an arrow function; that arrow returns `"Hi!"` when called.  
**Sample output:**
```text
Hi!
```

### 21. Rewrite a multi-line function as an arrow — Hard
**Context:** An arrow function may still use braces, conditions, and explicit returns.  
**Description:** Convert a `classify(n)` function that returns `"positive"` or `"non-positive"` into arrow syntax.  
**Sample output:**
```text
classify(-2) → non-positive
```

### 22. Predict a scope chain — Hard
**Context:** JavaScript searches outward from the current scope to find a variable.  
**Description:** With nested blocks, explain which value is used in the innermost block when that block does not redeclare the variable.  
**Sample output:**
```text
The closest enclosing value is used.
```

### 23. Fix an accidental global — Hard
**Context:** Assigning an undeclared variable can create a dangerous global value in non-strict mode.  
**Description:** Explain and fix `function setScore(){ score = 100; }`. Return or properly declare the score instead.  
**Sample output:**
```text
100
```

### 24. Scoped counter — Extreme
**Context:** A closure lets a returned function remember a variable from its outer function.  
**Description:** Write `makeCounter()` that returns an arrow function. Each call must increase and return an internal count, starting at zero.  
**Sample output:**
```text
counter() → 1
counter() → 2
counter() → 3
```
DAY5_FUNCTIONS_SCOPE_ALL_CHALLENGES.md
