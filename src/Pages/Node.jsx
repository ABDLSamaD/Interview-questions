import React from "react";
import Question from "../Components/Question";

const Node = () => {
  const questions = [
    {
      question: "What is Node.js?",
      answer:
        "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. It allows developers to use JavaScript to write command line tools and for server-side scripting.",
    },
    {
      question: "What is the event loop in Node.js?",
      answer:
        "The event loop is what allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It works by offloading operations to the system kernel whenever possible. The event loop is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.",
    },
    {
      question: "What is the purpose of module.exports in Node.js?",
      answer:
        "module.exports is the object that's actually returned as the result of a require call. The exports variable is initially set to that same object (i.e. it's a shorthand), so in the module code you can add properties to exports or you can completely replace exports with a new object or function.",
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
      answer:
        "process.nextTick() defers the execution of an action till the next pass around the event loop or it simply calls the callback function once the ongoing execution of the event loop is finished. setImmediate() executes a callback on the next cycle of the event loop and it gives back to the event loop for executing any I/O operations.",
    },
    {
      question: "How do you handle errors in Node.js?",
      answer:
        "Error handling in Node.js can be done in several ways. You can use try-catch blocks for synchronous code, and for asynchronous code, you typically pass errors as the first argument to callback functions. For promises, you can use .catch() method or try-catch with async/await. It's also common to use error-first callbacks in Node.js.",
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
  ];

  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Node.js Interview Questions
      </h2>
      <div className="space-y-6">
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            answer={q.answer}
            codeExample={q.codeExample}
          />
        ))}
      </div>
    </div>
  );
};

export default Node;
