import React from "react";
import Question from "../Components/Question";

const Node = () => {
  const questions = [
    {
      question: "What is Node.js?",
      shortAnswer:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      longAnswer:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. It allows developers to use JavaScript to write command line tools and for server-side scripting. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
    },
    {
      question: "What is the event loop in Node.js?",
      shortAnswer:
        "A mechanism that allows Node.js to perform non-blocking I/O operations.",
      longAnswer:
        "The event loop is what allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It works by offloading operations to the system kernel whenever possible. The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. Most modern kernels are multi-threaded, so they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.",
    },
    {
      question: "What is the purpose of module.exports in Node.js?",
      shortAnswer:
        "To expose functions, objects, or values from a module to be used in other files.",
      longAnswer:
        "module.exports is the object that's actually returned as the result of a require call. The exports variable is initially set to that same object (i.e. it's a shorthand), so in the module code you can add properties to exports or you can completely replace exports with a new object or function. This allows you to create modular code in Node.js, where you can separate your code into different files and expose only what you want to be accessible from outside the module.",
      codeExample: `
// myModule.js
module.exports = {
  foo: function() {
    console.log('Hello from foo');
  },
  bar: 'A bar string'
};

// main.js
const myModule = require('./myModule');
myModule.foo(); // Outputs: Hello from foo
console.log(myModule.bar); // Outputs: A bar string
      `,
    },
    {
      question:
        "What is the difference between setImmediate() and process.nextTick()?",
      shortAnswer:
        "process.nextTick() fires immediately on the same phase, setImmediate() fires on the following iteration or 'tick' of the event loop.",
      longAnswer:
        "process.nextTick() and setImmediate() are both functions used to defer the execution of code, but they work slightly differently. process.nextTick() defers the execution of an action till the next pass around the event loop. It fires immediately on the same phase. setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations. In essence, process.nextTick() fires more immediately than setImmediate().",
    },
    {
      question: "How do you handle errors in Node.js?",
      shortAnswer:
        "Using try-catch blocks, error-first callbacks, and promises/async-await error handling.",
      longAnswer:
        "Error handling in Node.js can be done in several ways. For synchronous code, you can use try-catch blocks. For asynchronous code, you typically pass errors as the first argument to callback functions (error-first callbacks). For promises, you can use .catch() method or try-catch with async/await. It's also common to use error events in Node.js, where an 'error' event is emitted when an error occurs.",
      codeExample: `
// Synchronous error handling
try {
  // code that might throw an error
} catch (err) {
  console.error(err);
}

// Asynchronous error handling with callbacks
fs.readFile('file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // process data
});

// Error handling with promises
someAsyncFunction()
  .then(result => {
    // handle result
  })
  .catch(err => {
    console.error('Error:', err);
  });

// Error handling with async/await
async function someFunction() {
  try {
    const result = await someAsyncFunction();
    // handle result
  } catch (err) {
    console.error('Error:', err);
  }
}
      `,
    },
    {
      question: "What is a buffer in Node.js?",
      shortAnswer: "A class in Node.js to handle binary data directly.",
      longAnswer:
        "In Node.js, Buffer is a class that's used to handle binary data. It's similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap. Buffers can be manipulated in various ways, like reading from or writing to a file system or a network. They're particularly useful when dealing with TCP streams or performing file system operations. The Buffer class is a global within Node.js, so it can be used without requiring an import statement.",
      codeExample: `
// Creating a buffer
const buf1 = Buffer.alloc(10); // Creates a buffer of 10 bytes filled with zeros
const buf2 = Buffer.from('Hello World'); // Creates a buffer containing 'Hello World'

// Writing to a buffer
buf1.write('Hello');

// Reading from a buffer
console.log(buf1.toString()); // Outputs: Hello
console.log(buf2.toString()); // Outputs: Hello World

// Getting the length of a buffer
console.log(buf1.length); // Outputs: 10
console.log(buf2.length); // Outputs: 11
      `,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Node.js Interview Questions
      </h2>
      <div className="space-y-6">
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            shortAnswer={q.shortAnswer}
            longAnswer={q.longAnswer}
            codeExample={q.codeExample}
          />
        ))}
      </div>
    </div>
  );
};

export default Node;
