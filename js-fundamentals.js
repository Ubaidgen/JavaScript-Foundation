// Comments
console.log('=== Comments ===');
// Single-line comment
console.log('Single-line comment works');
/* Multi-line comment
   spans multiple lines */
console.log('Multi-line comment works');

// Statements & Expressions
console.log('\n=== Statements & Expressions ===');
// Expression - produces a value
const x = 5 + 3; // 5 + 3 is an expression
console.log('Expression value:', x);

// Statement - performs an action
if (x > 5) {
  console.log('Statement executed: x is greater than 5');
}

// console.log()
console.log('\n=== console.log() ===');
console.log('Hello');
console.log(42);
console.log({ name: 'Alice' });
console.log('Name: %s, Age: %d', 'Alice', 30);

// Strict mode
console.log('\n=== Strict Mode ===');
'use strict';

// Demonstrating strict mode behavior
const obj = {};
Object.defineProperty(obj, 'frozen', {
  value: 42,
  writable: false,
  configurable: false
});

console.log('Frozen property value:', obj.frozen);

// This would fail in strict mode (demonstrated by comment)
// delete obj.frozen; // TypeError: Cannot delete property 'frozen' of <object>

// Strict mode prevents accidental globals
const strictVar = 'I am strict';
console.log('Strict mode active:', strictVar);