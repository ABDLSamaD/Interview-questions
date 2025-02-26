import Question from "../Components/Question";

const React = () => {
  const questions = [
    {
      question: "What is React?",
      shortAnswer: "A JavaScript library for building user interfaces.",
      longAnswer:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called 'components'. React is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      question: "What are the key features of React?",
      shortAnswer:
        "Virtual DOM, JSX, component-based architecture, unidirectional data flow.",
      longAnswer:
        "Key features of React include: Virtual DOM for better performance, JSX for writing HTML structures in JavaScript, component-based architecture for reusable UI pieces, unidirectional data flow for better control over the application state, and the ability to be used for both client and server-side rendering. React also has a rich ecosystem and can be used to build mobile applications (React Native).",
    },
    {
      question: "Explain the concept of Virtual DOM.",
      shortAnswer:
        "A lightweight copy of the actual DOM for performance optimization.",
      longAnswer:
        "Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM. It's a node tree that lists the elements, their attributes and content as Objects and their properties. React's render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. This Virtual DOM works in three simple steps: 1) Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation. 2) Then the difference between the previous DOM representation and the new one is calculated. 3) Once the calculations are done, the real DOM will be updated with only the things that have actually changed.",
    },
    {
      question: "What are hooks in React?",
      shortAnswer:
        "Functions that let you use state and other React features in functional components.",
      longAnswer:
        "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. React provides a few built-in Hooks like useState, useEffect, useContext, useReducer, etc. They solve a wide variety of problems that developers encounter when building React applications, such as extracting reusable logic from components, managing side effects, and more.",
      codeExample: `
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      `,
    },
    {
      question: "What is the difference between state and props?",
      shortAnswer:
        "State is mutable and managed internally, props are immutable and passed from parent.",
      longAnswer:
        "Props (short for properties) are a component's configuration. They are received from above and immutable as far as the component receiving them is concerned. A component cannot change its props, but it is responsible for putting together the props of its child components. State is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events. State is owned by the component where it is declared and updated using the setState() method.",
    },
    {
      question: "What is JSX?",
      shortAnswer:
        "A syntax extension for JavaScript that looks similar to XML or HTML.",
      longAnswer:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It's used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript. JSX produces React 'elements'. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.",
      codeExample: `
const element = <h1>Hello, {name}</h1>;
const element = React.createElement(
  'h1',
  null,
  \`Hello, \${name}\`
);
      `,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        React Interview Questions
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

export default React;
