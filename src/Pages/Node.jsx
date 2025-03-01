import React from "react";
import QuestionsList from "../Components/Question";

const Node = () => {
  const questions = [
    {
      question: "What is the Node.js cluster module?",
      shortAnswer: "Creates child processes to utilize multi-core systems.",
      longAnswer:
        "The cluster module allows creating multiple Node.js processes (workers) that share server ports. The master process manages workers, distributing incoming connections using round-robin (except Windows).",
      codeExample: `
  const cluster = require('cluster');
  if (cluster.isPrimary) {
    for (let i = 0; i < 4; i++) cluster.fork();
  } else {
    require('./server.js');
  }`,
    },
    {
      question: "Explain the phases of the Node.js event loop.",
      shortAnswer: "Timers → Pending → Idle/Prepare → Poll → Check → Close",
      longAnswer: `
  1. **Timers**: Execute setTimeout/setInterval callbacks
  2. **Pending callbacks**: Execute I/O-related deferred callbacks
  3. **Idle/Prepare**: Internal phase
  4. **Poll**: Retrieve new I/O events, execute their callbacks
  5. **Check**: Execute setImmediate() callbacks
  6. **Close**: Execute 'close' event callbacks`,
    },
    {
      question: "What is the purpose of the `--inspect` flag?",
      shortAnswer: "Enables Node.js debugger with Chrome DevTools Protocol.",
      codeExample: "node --inspect=9229 app.js",
      longAnswer:
        "Allows debugging using Chrome DevTools (chrome://inspect) or VS Code. Supports breakpoints, profiling, and memory analysis.",
    },
    {
      question: "How does `require()` work in Node.js?",
      shortAnswer: "Synchronous module loading with caching.",
      longAnswer: `
  1. Resolves file path
  2. Checks cache (require.cache)
  3. Reads file contents
  4. Wraps code in module wrapper function
  5. Executes code
  6. Returns module.exports`,
    },
    {
      question:
        "What is the difference between `exec` and `spawn` in child processes?",
      shortAnswer: "exec buffers output, spawn streams output.",
      codeExample: `
  const { exec, spawn } = require('child_process');
  
  exec('ls -l', (err, stdout) => {...}); 
  spawn('ls', ['-l']).stdout.on('data', (data) => {...});`,
    },
    {
      question: "How to handle uncaught exceptions?",
      shortAnswer: "process.on('uncaughtException') and proper cleanup.",
      codeExample: `
  process.on('uncaughtException', (err) => {
    console.error('Critical error:', err);
    // Always exit after logging
    process.exit(1);
  });`,
    },
    {
      question: "What is the purpose of the `util.promisify` function?",
      shortAnswer: "Converts callback-style functions to promises.",
      codeExample: `
  const util = require('util');
  const fs = require('fs');
  const readFile = util.promisify(fs.readFile);
  
  async function main() {
    const data = await readFile('file.txt');
  }`,
    },
    {
      question: "Explain the `Stream` module types.",
      shortAnswer: "Readable, Writable, Duplex, Transform",
      codeExample: `
  const { Readable } = require('stream');
  const myStream = new Readable({
    read(size) {
      this.push('data');
      this.push(null); // EOF
    }
  });`,
    },
    {
      question: "What is the `__dirname` global?",
      shortAnswer: "Absolute path of the directory containing current file.",
      codeExample: "console.log(__dirname); // /home/user/project/src",
    },
    {
      question: "How to implement rate limiting in Express?",
      shortAnswer: "Use middleware like express-rate-limit.",
      codeExample: `
  const rateLimit = require('express-rate-limit');
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests
  }));`,
    },
    // ... 20 more questions ...
    {
      question: "What is the purpose of the `net` module?",
      shortAnswer: "Create TCP servers/clients.",
      codeExample: `
  const net = require('net');
  const server = net.createServer((socket) => {
    socket.write('Echo server\\r\\n');
    socket.pipe(socket);
  }).listen(1337, '127.0.0.1');`,
    },
    {
      question: "How to handle environment variables?",
      shortAnswer: "Use `process.env` with dotenv package.",
      codeExample: `
  // .env file
  PORT=3000
  
  // app.js
  require('dotenv').config();
  const port = process.env.PORT;`,
    },
    {
      question:
        "What is the difference between `process.nextTick()` and `setImmediate()`?",
      shortAnswer:
        "nextTick runs before event loop phases, setImmediate after.",
      codeExample: `
  process.nextTick(() => console.log('Next tick'));
  setImmediate(() => console.log('Immediate')); 
  // Output order: Next tick → Immediate`,
    },
    {
      question: "How to create a HTTP server without Express?",
      shortAnswer: "Use the http core module.",
      codeExample: `
  const http = require('http');
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World');
  }).listen(3000);`,
    },
    {
      question: "What is the purpose of the `events` module?",
      shortAnswer: "Implement event-driven architecture via EventEmitter.",
      codeExample: `
  const EventEmitter = require('events');
  class MyEmitter extends EventEmitter {}
  const myEmitter = new MyEmitter();
  myEmitter.on('event', () => console.log('Event fired!'));
  myEmitter.emit('event');`,
    },
    {
      question: "How to handle file uploads in Express?",
      shortAnswer: "Use middleware like multer.",
      codeExample: `
  const multer = require('multer');
  const upload = multer({ dest: 'uploads/' });
  
  app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded!');
  });`,
    },
    {
      question: "What is the Node.js V8 engine?",
      shortAnswer: "Google's JavaScript engine used by Node.js for execution.",
      longAnswer:
        "V8 compiles JS directly to native machine code using JIT compilation. It handles memory management (garbage collection) and optimizes hot code paths.",
    },
    {
      question: "How to implement caching in Node.js?",
      shortAnswer: "Use in-memory stores (Redis) or HTTP caching headers.",
      codeExample: `
  // Using Redis
  const redis = require('redis');
  const client = redis.createClient();
  
  function cacheMiddleware(req, res, next) {
    const key = req.url;
    client.get(key, (err, data) => {
      if (data) return res.send(data);
      next();
    });
  }`,
    },
    {
      question: "What is the purpose of the `os` module?",
      shortAnswer: "Get OS-level information.",
      codeExample: `
  const os = require('os');
  console.log(os.platform()); // 'linux'
  console.log(os.cpus().length); // CPU core count`,
    },
    {
      question: "How to handle memory leaks?",
      shortAnswer:
        "Use heap snapshots, fix global variables, clean up listeners.",
      longAnswer:
        "Common causes: Global variables, closures holding references, uncleared timers/intervals, unremoved event listeners. Use --inspect flag with Chrome DevTools to analyze.",
    },
    {
      question: "What is the `worker_threads` module?",
      shortAnswer: "Run JavaScript in parallel using threads.",
      codeExample: `const { Worker } = require('worker_threads'); new Worker(
const { parentPort } = require('worker_threads');
    parentPort.postMessage('Hello from worker');
  '.on('message', console.log);`,
    },
    {
      question: "How to handle circular dependencies?",
      shortAnswer: "Refactor code or use dependency injection.",
      longAnswer:
        "When module A requires B and B requires A, Node.js returns incomplete objects. Solutions: Move shared code to third module, use dependency injection pattern.",
    },
    {
      question: "What is the `path` module used for?",
      shortAnswer: "Handle file/directory paths cross-platform.",
      codeExample:
        "const path = require('path'); const fullPath = path.join(__dirname, 'files', 'test.txt'); const ext = path.extname(fullPath)",
    },
    {
      question: "How to implement authentication in Express?",
      shortAnswer: "Use Passport.js or JWT tokens.",
      codeExample: `
  const jwt = require('jsonwebtoken');
  const token = jwt.sign({ userId: 123 }, 'secret');
  // Verify later: jwt.verify(token, 'secret');`,
    },
    {
      question: "What is the `readline` module?",
      shortAnswer: "Read input from streams line-by-line.",
      codeExample: `
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('What's your name? ', (name) => {
    console.log(\`Hello \${name}\`);
    rl.close();
  });`,
    },
    {
      question: "How to handle CORS in native Node.js?",
      shortAnswer: "Set response headers manually.",
      codeExample: `
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST'
  });`,
    },
    {
      question: "What is the `perf_hooks` module?",
      shortAnswer: "Performance measurement utilities.",
      codeExample: `
  const { performance } = require('perf_hooks');
  const start = performance.now();
  // ... code ...
  console.log(\`Took \${performance.now() - start}ms\`);`,
    },
    {
      question: "How to implement WebSockets in Node.js?",
      shortAnswer: "Use ws library or Socket.IO.",
      codeExample: `
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ port: 8080 });
  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      ws.send(\`Echo: \${message}\`);
    });
  });`,
    },
    {
      question: "What is the `child_process.fork()` method?",
      shortAnswer: "Special case of spawn() for Node.js processes.",
      codeExample: `
  const { fork } = require('child_process');
  const child = fork('script.js');
  child.on('message', (m) => console.log('Child said:', m));
  child.send({ hello: 'world' });`,
    },
    {
      question: "How to handle large JSON files?",
      shortAnswer: "Use streaming JSON parsers like JSONStream.",
      codeExample: `
  const JSONStream = require('JSONStream');
  const fs = require('fs');
  
  fs.createReadStream('big.json')
    .pipe(JSONStream.parse('*'))
    .on('data', (item) => processItem(item));`,
    },
    {
      question: "What is the `vm` module?",
      shortAnswer: "Execute JavaScript code in V8 virtual machine contexts.",
      codeExample: `
  const vm = require('vm');
  const context = { a: 1 };
  vm.runInNewContext('a += 1; b = 3;', context);
  console.log(context); // { a: 2, b: 3 }`,
    },
  ];

  return (
    <div className="max-w-full mx-auto md:p-5 p-2">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Node.js Interview Questions
      </h2>
      <div className="space-y-6">
        <QuestionsList questions={questions} />
      </div>
    </div>
  );
};

export default Node;
