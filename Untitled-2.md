# Day 4 — Arrays: complete challenge catalogue

**Topics:** array creation, indexing, mutation, traversal, searching, counting, and manual transformations.  
**Rule:** use core JavaScript and loops. Where stated, do not use convenience methods such as `filter`, `splice`, or `Set`.

## Arrays basics

### 1. Create and print an array — Easy
**Context:** Creating an array literal and inspecting its contents.  
**Description:** Create an array containing three favourite foods, then print the array.  
**Sample output:**
```text
["pizza", "sushi", "tacos"]
```

### 2. Access by index — Easy
**Context:** Array indexes begin at `0`.  
**Description:** Given `[10, 20, 30]`, print the second item.  
**Sample output:**
```text
20
```

### 3. Push a new item — Easy
**Context:** `.push()` adds an item to the end of an array.  
**Description:** Given `[1, 2]`, add `3` and print the updated array.  
**Sample output:**
```text
[1, 2, 3]
```

### 4. Pop the last item — Easy
**Context:** `.pop()` both removes and returns the final item.  
**Description:** Given `[5, 6, 7]`, print the removed value and the remaining array.  
**Sample output:**
```text
7
[5, 6]
```

### 5. Change an item by index — Medium
**Context:** Array items can be replaced through their index.  
**Description:** Change `"green"` to `"yellow"` in `["red", "green", "blue"]`.  
**Sample output:**
```text
["red", "yellow", "blue"]
```

### 6. Access the last item generically — Medium
**Context:** The final valid index is always `array.length - 1`.  
**Description:** Print the last item without knowing the array size in advance.  
**Sample output:**
```text
last item
```

### 7. `const` array mutation — Medium
**Context:** `const` prevents reassignment of the variable, not changes to its array contents.  
**Description:** Explain why `const arr = [1, 2]; arr.push(3);` works, and why assigning `arr = [4, 5]` does not.  
**Sample output:**
```text
[1, 2, 3]
```

### 8. Build an array with a loop — Medium
**Context:** Start with an empty array and use `.push()` during each iteration.  
**Description:** Build an array of squares from 1 through 5.  
**Sample output:**
```text
[1, 4, 9, 16, 25]
```

### 9. Swap two items — Hard
**Context:** A temporary variable prevents a value being overwritten during a swap.  
**Description:** Swap the first and final items of `[1, 2, 3, 4]`.  
**Sample output:**
```text
[4, 2, 3, 1]
```

### 10. Remove an item by value — Hard
**Context:** Rebuild a new array while skipping a matching value.  
**Description:** Remove `30` from `[10, 20, 30, 40]` without using `.filter()` or `.splice()`.  
**Sample output:**
```text
[10, 20, 40]
```

### 11. Insert at a specific index manually — Hard
**Context:** Copy items into a result array and insert the new value at the correct point.  
**Description:** Insert `3` into `[1, 2, 4, 5]` between `2` and `4`, without `.splice()`.  
**Sample output:**
```text
[1, 2, 3, 4, 5]
```

### 12. Rotate an array manually — Extreme
**Context:** Save the first value, copy the rest, then append the saved value.  
**Description:** Rotate `[1, 2, 3, 4, 5]` left by one position without `shift()` or other rotate helpers.  
**Sample output:**
... (206 lignes restantes)