# Unexpected Behavior of + Operator with Strings in JavaScript
This repository demonstrates a common JavaScript bug related to the + operator's behavior with strings.  JavaScript's dynamic typing means the + operator will perform string concatenation if either operand is a string, even if the other is a number. This can lead to unexpected results when performing mathematical operations.

## Bug Description
The `foo` function is intended to add two numbers. However, due to JavaScript's loose typing, when either or both of the inputs are strings, the + operator will concatenate the inputs as strings instead of performing numerical addition.

## Solution
The solution involves explicit type checking or conversion to ensure both operands are numbers before performing the addition.