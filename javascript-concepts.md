# JavaScript Core Concepts

## Hoisting
Variable and function declarations are moved to the top of their scope before execution.

```javascript
console.log(x); // undefined (hoisted, but not initialized)
var x = 5;

// Function declarations are hoisted completely
console.log(myFunc()); // "Hello!"
function myFunc() { return "Hello!"; }
```

## Temporal Dead Zone (TDZ)
Variables declared with `let`/`const` are in scope but cannot be accessed before their declaration line.

```javascript
console.log(x); // ReferenceError: x is not defined
let x = 5;

console.log(y); // ReferenceError: y is not defined
const y = 10;
```

## Closures
A function that retains access to its outer function's scope even after the outer function has returned.

```javascript
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const add5 = outer(5);
console.log(add5(3)); // 8 - x is captured in closure
```

## Currying
Transforming a function with multiple arguments into a sequence of functions each taking one argument.

```javascript
function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curry(1)(2)(3)); // 6

// ES6 arrow version
const curried = a => b => c => a + b + c;
```

## Debouncing
Delay function execution until after a period of inactivity. Useful for resize, scroll, or input events.

```javascript
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedSearch = debounce(() => console.log('Searching'), 300);
// Call repeatedly - only logs after 300ms of pause
```

## Throttling
Ensure a function is called at most once in a specified time period. Useful for scroll handlers.

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const throttledScroll = throttle(() => console.log('Scrolling'), 1000);
```

## Memoization
Cache expensive function call results to avoid redundant computation.

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const slowSquare = memoize(n => {
  // expensive computation
  return n * n;
});
```

## Immutability
Data structures are not modified; new ones are created instead.

```javascript
// Mutable
const obj = { a: 1 };
obj.a = 2; // Changes original

// Immutable
const obj = { a: 1 };
const updated = { ...obj, a: 2 }; // New object created
```

## Shallow vs Deep Copy

**Shallow copy** - Copies top-level properties, nested objects still reference the same memory.

```javascript
const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };
shallow.b === obj.b; // true - same reference
```

**Deep copy** - All nested values are duplicated.

```javascript
const obj = { a: 1, b: { c: 2 } };
const deep = JSON.parse(JSON.stringify(obj));
deep.b === obj.b; // false - independent copy
```

## Garbage Collection
Automatic memory management that identifies and frees memory no longer in use.

```javascript
function createObject() {
  const obj = { data: 'large data' };
  return obj;
}

// When no references to the returned object exist,
// garbage collector can free that memory
```

## Memory Management
Tracking and controlling how memory is allocated and freed.

- **Reference counting** - Track how many references point to an object
- **Mark-and-Sweep** - Garbage collector marks reachable objects and sweeps unmarked ones
- **Prevention**: Avoid global variables, null out references, use weak references when appropriate