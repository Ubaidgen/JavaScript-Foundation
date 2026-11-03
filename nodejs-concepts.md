# JavaScript for Backend

## Node.js Fundamentals
Node.js is a runtime built on Chrome's V8 JavaScript engine, enabling server-side JavaScript.

```javascript
// Single-threaded event loop
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);
setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');
// Output: Start, End, Timeout 1, Timeout 2
```

## npm
Node Package Manager - tool for managing dependencies.

```bash
npm install express
npm install --save-dev nodemon
npm uninstall lodash
npm update
npm list
```

## package.json
Configuration file for Node.js projects.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

## Environment Variables
Configuration values stored outside the code.

```javascript
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
const port = process.env.PORT || 3000;
```

## File System
Read and write files synchronously or asynchronously.

```javascript
const fs = require('fs');

// Synchronous
const data = fs.readFileSync('file.txt', 'utf8');

// Asynchronous
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write file
fs.writeFileSync('output.txt', 'Hello World');
```

## HTTP Server
Create a basic web server.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## Routing
Direct requests based on URL and method.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});
```

## Middleware Concept
Functions that process requests before they reach the route handler.

```javascript
const express = require('express');
const app = express();

// Middleware - runs for every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass to next middleware/route
});

// Middleware for parsing JSON body
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello' });
});
```

## Streams
Efficiently handle large amounts of data piece by piece.

```javascript
const fs = require('fs');
const http = require('http');

// Create readable stream
const readStream = fs.createReadStream('large-file.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log('Chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File reading complete');
});

// Pipe stream to HTTP response
const server = http.createServer((req, res) => {
  fs.createReadStream('file.txt').pipe(res);
});
```

## Buffers
Handle binary data in Node.js.

```javascript
const buffer = Buffer.from('Hello World');
console.log(buffer.toString());
console.log(buffer.length);

const buffer2 = Buffer.alloc(10);
buffer2.write('Hi');
console.log(buffer2.toString());
```

## Events
Event-driven architecture using EventEmitter.

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Alice'); // Hello, Alice!
```

## Process
Information about the current Node.js process.

```javascript
console.log(process.version); // Node.js version
console.log(process.platform); // darwin, linux, win32
console.log(process.env); // Environment variables
console.log(process.pid); // Process ID

process.exit(0); // Exit the process
```

## Error Handling
Catch and handle errors gracefully.

```javascript
// Synchronous try-catch
try {
  const data = fs.readFileSync('file.txt');
  console.log(data);
} catch (err) {
  console.error('Error:', err.message);
}

// Async error handling
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
  console.log(data);
});

// Uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
```

## Logging
Record application events and debug information.

```javascript
const fs = require('fs');

// Simple logger
const log = (message) => {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} - ${message}\n`;
  fs.appendFile('app.log', logEntry, (err) => {
    if (err) console.error('Log write failed:', err);
  });
};

log('Application started');
log('User logged in');

// Using a logging library
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ]
});
```