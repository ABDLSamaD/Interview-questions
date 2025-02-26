import React from "react";
import Question from "../Components/Question";

const Express = () => {
  const questions = [
    {
      question: "What is Express.js?",
      answer:
        "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It facilitates the rapid development of Node based Web applications.",
    },
    {
      question: "What are middleware in Express.js?",
      answer:
        "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle, commonly denoted by a variable named next. Middleware can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware in the stack.",
      codeExample: `
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
      `,
    },
    {
      question: "How do you handle errors in Express.js?",
      answer:
        "Express comes with a built-in error handler that takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack. If you pass an error to next() and you don't handle it in a custom error handler, it will be handled by the built-in error handler; the error will be written to the client with the stack trace.",
      codeExample: `
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
      `,
    },
    {
      question: "What is the purpose of next() in Express?",
      answer:
        "The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.",
    },
    {
      question: "How can you serve static files in Express?",
      answer:
        "Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc. You can use the express.static middleware to serve static content for your application.",
      codeExample: `
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
      `,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Express.js Interview Questions
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

export default Express;
