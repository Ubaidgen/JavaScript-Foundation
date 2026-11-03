// Node.js Fundamentals
console.log('=== Node.js Fundamentals ===');
console.log('Single-threaded event loop');

console.log('Start');
setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);
console.log('End');

// Environment Variables
console.log('\n=== Environment Variables ===');
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Port from env:', process.env.PORT || 'not set');

// File System
console.log('\n=== File System ===');
const fs = require('fs');

fs.writeFileSync('temp.txt', 'Hello from Node.js');
const data = fs.readFileSync('temp.txt', 'utf8');
console.log('File content:', data);

// HTTP Server
console.log('\n=== HTTP Server ===');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

// Routing
console.log('\n=== Routing ===');
const routes = {
  '/': 'Home Page',
  '/about': 'About Page'
};

const routerServer = http.createServer((req, res) => {
  const response = routes[req.url] || 'Not Found';
  const status = routes[req.url] ? 200 : 404;
  res.writeHead(status, { 'Content-Type': 'text/plain' });
  res.end(response);
});

// Middleware concept
console.log('\n=== Middleware Concept ===');
const middlewareLog = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const middlewareServer = http.createServer((req, res) => {
  middlewareLog(req, res, () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Middleware processed');
  });
});

// Streams
console.log('\n=== Streams ===');
const readStream = fs.createReadStream('temp.txt', 'utf8');
readStream.on('data', (chunk) => {
  console.log('Stream chunk:', chunk);
});
readStream.on('end', () => {
  console.log('Stream ended');
});
readStream.on('error', (err) => {
  console.error('Stream error:', err.message);
});

// Buffers
console.log('\n=== Buffers ===');
const buffer = Buffer.from('Hello World');
console.log('Buffer:', buffer.toString());
console.log('Buffer length:', buffer.length);

// Events
console.log('\n=== Events ===');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Alice');

// Process
console.log('\n=== Process ===');
console.log('PID:', process.pid);
console.log('Platform:', process.platform);

// Error Handling
console.log('\n=== Error Handling ===');
try {
  const data = fs.readFileSync('temp.txt', 'utf8');
  console.log('Read successfully');
} catch (err) {
  console.error('Error:', err.message);
}

// Logging
console.log('\n=== Logging ===');
const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
};

log('Application started');