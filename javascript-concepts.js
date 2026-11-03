// Hoisting
console.log('=== Hoisting ===');
console.log(x); // undefined (hoisted, but not initialized)
var x = 5;

console.log(myFunc()); // "Hello!"
function myFunc() { return "Hello!"; }

// Temporal Dead Zone (TDZ)
console.log('\n=== Temporal Dead Zone ===');
try {
  console.log(letVar); // ReferenceError
} catch (e) {
  console.log('TDZ error:', e.message);
}
let letVar = 5;

// Closures
console.log('\n=== Closures ===');
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
const add5 = outer(5);
console.log(add5(3)); // 8

// Currying
console.log('\n=== Currying ===');
function curry(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curry(1)(2)(3)); // 6

// Debouncing
console.log('\n=== Debouncing ===');
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Throttling
console.log('\n=== Throttling ===');
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

// Memoization
console.log('\n=== Memoization ===');
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

const slowSquare = memoize(n => n * n);
console.log(slowSquare(5)); // 25

// Immutability
console.log('\n=== Immutability ===');
const obj = { a: 1 };
const updated = { ...obj, a: 2 };
console.log('Original:', obj);
console.log('Updated:', updated);

// Shallow vs Deep Copy
console.log('\n=== Shallow vs Deep Copy ===');
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };
const deep = JSON.parse(JSON.stringify(original));

shallow.b.c = 99;
console.log('Shallow affects original:', original.b.c); // 99

deep.b.c = 100;
console.log('Deep does not affect original:', original.b.c); // 99

// Garbage Collection
console.log('\n=== Garbage Collection ===');
function createObject() {
  const obj = { data: 'large data' };
  return obj;
}

let ref1 = createObject();
let ref2 = ref1;
ref1 = null;
ref2 = null;
// When no references to the returned object exist,
// garbage collector can free that memory