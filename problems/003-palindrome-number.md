# 003. Palindrome Number

**Difficulty:** 🟢 Easy

## Problem Statement

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

An integer is a **palindrome** when it reads the same backward as forward.

---

## Examples

### Example 1

```text
Input: x = 121
Output: true
```

### Example 2

```text
Input: x = -121
Output: false

Explanation:
From left to right, it reads -121.
From right to left, it becomes 121-.
Therefore, it is not a palindrome.
```

### Example 3

```text
Input: x = 10
Output: false

Explanation:
Reads 01 from right to left.
Therefore, it is not a palindrome.
```

---

## Constraints

```text
-2³¹ <= x <= 2³¹ - 1
```

---

## Approach

You can solve this problem in two ways:

1. **String Approach**
   - Convert the integer to a string.
   - Compare it with its reversed version.

2. **Mathematical Approach (Recommended)**
   - Reverse the integer mathematically without converting it to a string.
   - Compare the reversed number with the original.

---

## Concepts

- Math
- Two Pointers (String Approach)
- Integer Manipulation

---

## Solution

JavaScript solution is available in:

```text
solutions/problem_3.js
```

---

## Time Complexity

| Approach | Time | Space |
|----------|------|-------|
| String | O(n) | O(n) |
| Math | O(log n) | O(1) |

---

## LeetCode

**Problem #9 — Palindrome Number**