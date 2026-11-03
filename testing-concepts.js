// Unit Testing Concepts
console.log('=== Unit Testing Concepts ===');

// A simple function to test
function add(a, b) {
  return a + b;
}

console.log('add(2, 3) =', add(2, 3));

// Assertions
console.log('\n=== Assertions ===');
const assert = require('assert');

// Basic assertions
assert.strictEqual(add(2, 3), 5);
console.log('assert: add(2, 3) === 5 - PASSED');

assert.strictEqual(add(-1, 1), 0);
console.log('assert: add(-1, 1) === 0 - PASSED');

// Assert with custom message
try {
  assert.strictEqual(add(2, 2), 5, 'add(2,2) should be 4 not 5');
} catch (e) {
  console.log('assert failed as expected:', e.message);
}

// Mocking
console.log('\n=== Mocking ===');

// Real implementation
function getData(api) {
  return api.fetch('/data');
}

// Mock API
const mockApi = {
  fetch: (url) => `Mock data for ${url}`
};

const result = getData(mockApi);
console.log('Mock result:', result);

// Async Testing
console.log('\n=== Async Testing ===');

// Async function to test
async function fetchData() {
  return { id: 1, name: 'Test' };
}

(async () => {
  const data = await fetchData();
  assert.deepStrictEqual(data, { id: 1, name: 'Test' });
  console.log('Async test PASSED');
})();

// Integration Testing
console.log('\n=== Integration Testing ===');

// Simulate user registration and login
function register(db, user) {
  db.users.push(user);
  return { id: db.users.length, ...user };
}

function login(db, credentials) {
  const user = db.users.find(u => u.email === credentials.email);
  if (user && user.password === credentials.password) {
    return { token: 'mock-token-' + user.id };
  }
  throw new Error('Invalid credentials');
}

const db = { users: [] };

// Test full flow
const user = register(db, { email: 'test@test.com', password: '123' });
console.log('User registered:', user);

const session = login(db, { email: 'test@test.com', password: '123' });
console.log('User logged in:', session);

assert.ok(user.id);
assert.ok(session.token);
console.log('Integration test PASSED');

// Test-Driven Development (TDD) Basics
console.log('\n=== Test-Driven Development (TDD) ===');

// 1. Write test first
function testCalculateDiscount() {
  const price = 100;
  const discount = 0.1;
  const expected = 90;
  
  // Test fails initially
  try {
    assert.strictEqual(calculateDiscount(price, discount), expected);
    console.log('TDD test PASSED');
  } catch (e) {
    console.log('TDD test FAILED (expected):', e.message);
  }
}

// 2. Implement function to make test pass
function calculateDiscount(price, discountRate) {
  return Math.round(price * (1 - discountRate) * 100) / 100;
}

testCalculateDiscount();

// 3. Test passes after implementation
console.log('TDD cycle complete: RED -> GREEN -> REFACTOR');