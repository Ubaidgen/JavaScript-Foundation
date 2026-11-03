# Testing

## Unit Testing Concepts
Testing individual units or components of code in isolation.

```javascript
// A simple function to test
function add(a, b) {
  return a + b;
}

// Test cases
console.log(add(2, 3) === 5); // true
console.log(add(-1, 1) === 0); // true
```

## Assertions
Statements that check if a condition is true and throw an error if false.

```javascript
// Simple assertion
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
  console.log('Assertion passed:', message);
}

assert(add(2, 3) === 5, 'add(2, 3) should equal 5');
```

## Mocking
Replacing real dependencies with mock objects to isolate the code under test.

```javascript
// Real implementation
function getData(api) {
  return api.fetch('/data');
}

// Mock API
const mockApi = {
  fetch: (url) => `Mock data for ${url}`
};

// Test with mock
const result = getData(mockApi);
console.log(result); // Mock data for /data
```

## Async Testing
Testing code that involves asynchronous operations.

```javascript
// Async function to test
async function fetchData() {
  const response = await fetch('/api/data');
  return response.json();
}

// Test with async/await
test('fetches data', async () => {
  const data = await fetchData();
  expect(data).toEqual({ id: 1 });
});
```

## Integration Testing
Testing how different units work together as a group.

```javascript
// Test full flow
test('user registration and login flow', async () => {
  // Register user
  const user = await register({ email: 'test@test.com', password: '123' });
  
  // Login user
  const session = await login({ email: 'test@test.com', password: '123' });
  
  expect(user.id).toBeDefined();
  expect(session.token).toBeDefined();
});
```

## Test-Driven Development (TDD) Basics
Write tests first, then implement code to pass them.

```javascript
// 1. Write failing test
test('should calculate discount', () => {
  const price = 100;
  const discount = 0.1;
  const expected = 90;
  expect(calculateDiscount(price, discount)).toBe(expected);
});

// 2. Implement function
function calculateDiscount(price, discountRate) {
  return price * (1 - discountRate);
}

// 3. Test passes
```