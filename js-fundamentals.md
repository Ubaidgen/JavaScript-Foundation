# Comments
Comments are non-executing instructions in code for readability.

```javascript
// Single-line comment
/* Multi-line comment */
```

# Statements & Expressions
An expression produces a value; a statement performs an action.

```javascript
// Expression - produces a value
const x = 5 + 3; // 5 + 3 is an expression

// Statement - performs an action
if (x > 5) {
  console.log('Greater');
}
```

# console.log()
Outputs values to the console for debugging.

```javascript
console.log('Hello');
console.log(42);
console.log({ name: 'Alice' });
console.log('Name: %s, Age: %d', 'Alice', 30);
```

# Strict Mode
Enforces stricter parsing and error handling.

```javascript
'use strict';

x = 5; // ReferenceError: x is not defined
// Without strict mode, this creates a global variable (bad)
```