import React from "react";
import QuestionsList from "../Components/Question";

const Complex = () => {
  const questions = [
    {
      question:
        "Explain MongoDB indexing and how it improves query performance.",
      shortAnswer:
        "Indexes in MongoDB are similar to indexes in books. They allow the database to quickly locate and access data without scanning the entire collection. Indexes are created using the `createIndex()` method and can significantly improve query performance, especially for large datasets. However, they also come with a cost, as they consume additional storage and can slow down write operations.",
      codeExample: `// Creating an index on the "name" field
db.collection.createIndex({ name: 1 });

// Query using the indexed field
db.collection.find({ name: "John" });`,
    },
    {
      question: "What is sharding in MongoDB, and why is it important?",
      shortAnswer:
        "Sharding is a method for distributing data across multiple servers. It is MongoDB's approach to horizontal scaling, allowing you to handle large datasets and high throughput operations. Sharding involves splitting data into smaller chunks (shards) and distributing them across multiple servers. This ensures that no single server becomes a bottleneck and improves overall performance.",
    },
    {
      question:
        "How does middleware work in Express, and can you create a custom middleware?",
      longAnswer:
        "Middleware in Express are functions that have access to the request (`req`), response (`res`), and the next middleware function in the application's request-response cycle. They can perform tasks like logging, authentication, and error handling. Custom middleware can be created by defining a function and using `app.use()` to apply it.",
      codeExample: `// Custom middleware to log requests
const loggerMiddleware = (req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
};

app.use(loggerMiddleware);`,
    },
    {
      question:
        "What is the difference between app.use() and app.all() in Express?",
      longAnswer:
        "`app.use()` is used to mount middleware functions at a specified path, while `app.all()` is used to handle all HTTP methods (GET, POST, etc.) for a specific route. `app.use()` is typically used for middleware, whereas `app.all()` is used for route handling.",
    },
    {
      question:
        "Explain the React component lifecycle methods in class components.",
      longAnswer: `React class components have several lifecycle methods, including:
          - componentDidMount(): Called after the component is mounted.
          - componentDidUpdate(): Called after the component is updated.
          - componentWillUnmount(): Called before the component is unmounted.
          These methods allow you to perform actions at specific points in a component's lifecycle.`,
      codeExample: `class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Hello, World!</div>;
  }
}`,
    },
    {
      question:
        "What are React hooks, and how do they differ from class components?",
      shortAnswer:
        "React hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to simplify component logic and reduce the need for class components. Key hooks include `useState`, `useEffect`, and `useContext`. Unlike class components, hooks do not require lifecycle methods and make code more reusable and easier to understand.",
    },
    {
      question: "What is the event loop in Node.js, and how does it work?",
      longAnswer:
        "The event loop is a core concept in Node.js that allows it to perform non-blocking I/O operations. It continuously checks the call stack and processes events from the event queue. When the call stack is empty, the event loop pushes events from the queue to the stack for execution. This enables Node.js to handle multiple operations concurrently without blocking the main thread.",
      codeExample: `// Example of non-blocking I/O
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('Reading file...');`,
    },
    {
      question:
        "How does Node.js handle child processes, and why would you use them?",
      shortAnswer:
        "Node.js provides the `child_process` module to create and manage child processes. This is useful for running CPU-intensive tasks in parallel, as Node.js is single-threaded. You can use `spawn()`, `fork()`, `exec()`, or `execFile()` to create child processes. Each method has its own use case, such as `fork()` for creating independent processes that communicate via IPC.",
    },
  ];
  return (
    <div className="max-w-full mx-auto md:p-5 p-2">
      <h1 className="text-4xl font-bold text-center mb-12">
        Complex MERN Stack Interview Questions
      </h1>
      <div className="space-y-6">
        <QuestionsList questions={questions} />
      </div>
    </div>
  );
};

export default Complex;
