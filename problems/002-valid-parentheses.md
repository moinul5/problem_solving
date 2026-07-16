# 002. Valid Parentheses

**Difficulty:** Easy

## Problem

Given a string `s` containing only the characters:

- `(`
- `)`
- `{`
- `}`
- `[`
- `]`

Determine whether the input string is valid.

A string is valid if:

1. Every opening bracket has a corresponding closing bracket of the same type.
2. Brackets are closed in the correct order.
3. Every closing bracket has a matching opening bracket.

---

## Example 1

```text
Input:
s = "()"

Output:
true
```

### Example 2

```text
Input:
s = "()[]{}"

Output:
true
```

### Example 3

```text
Input:
s = "(]"

Output:
false
```

### Example 4

```text
Input:
s = "([)]"

Output:
false
```

### Example 5

```text
Input:
s = "{[]}"

Output:
true
```

---

## Constraints

- `1 <= s.length <= 10⁴`
- `s` contains only the characters `'()[]{}'`.

---

## Concepts Used

- Stack
- Arrays
- String Traversal
- Time Complexity Analysis

---

## Solution

See: `../solutions/problem_2.js`