"use client";

import QuestionsList from "../Components/Question";

const React = () => {
  const questions = [
    {
      question: "What is React?",
      shortAnswer:
        "React is a JavaScript library for building user interfaces.",
      longAnswer:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It allows developers to create reusable UI components that can manage their state and render efficiently. React is maintained by Facebook and is commonly used for building single-page applications (SPAs).",
    },
    {
      question: "What is JSX?",
      shortAnswer:
        "JSX is a syntax extension for JavaScript that looks similar to HTML.",
      longAnswer:
        "JSX allows developers to write HTML structures in the same file as JavaScript code. It gets transformed into React.createElement calls that create virtual DOM elements. JSX is not required to write React, but it makes the code more readable and easier to write.",
      codeExample: `
        const element = <h1>Hello, world!</h1>;
        ReactDOM.render(element, document.getElementById('root'));
      `,
    },
    {
      question: "What is the virtual DOM in React?",
      shortAnswer:
        "The virtual DOM is a lightweight in-memory representation of the real DOM.",
      longAnswer:
        "React creates a virtual DOM to optimize the process of updating the actual DOM. When state or props change, React first updates the virtual DOM, compares it with the previous state, and then makes the minimal number of changes to the actual DOM to improve performance.",
    },
    {
      question: "What are components in React?",
      shortAnswer:
        "Components are reusable building blocks in a React application.",
      longAnswer:
        "Components are the core building blocks of a React application. They can be functional or class-based and encapsulate logic, UI, and state. Components can be nested, reused, and composed to create complex UIs.",
      codeExample: `
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
  
        function App() {
          return <Welcome name="Sara" />;
        }`,
    },
    {
      question:
        "What is the difference between functional and class components?",
      shortAnswer:
        "Functional components are stateless and simpler, while class components can manage state and lifecycle methods.",
      longAnswer:
        "Functional components are simpler and typically used for presenting UI. They were initially stateless but can now use hooks to manage state and side effects. Class components have more features, such as state management and lifecycle methods like componentDidMount(), but functional components are now the preferred way to write components in React due to hooks.",
    },
    {
      question: "What are props in React?",
      shortAnswer:
        "Props (short for properties) are inputs passed into components.",
      longAnswer:
        "Props are used to pass data from parent components to child components. They are read-only and allow for the creation of dynamic, reusable components that can be configured with different data.",
    },
    {
      question: "What is state in React?",
      shortAnswer:
        "State is a way to store data in a component that can change over time.",
      longAnswer:
        "State is used to manage data that can change within a component. Unlike props, which are passed down from parent components, state is specific to the component and can be updated by user interactions or other events.",
    },
    {
      question: "What are React Hooks?",
      shortAnswer:
        "Hooks are functions that allow functional components to have state and side effects.",
      longAnswer:
        "React hooks were introduced in React 16.8 to allow functional components to have features like state and lifecycle methods. Common hooks include useState(), useEffect(), and useContext(), which allow components to manage local state, perform side effects, and share data.",
    },
    {
      question: "What is useState() in React?",
      shortAnswer:
        "useState() is a hook that allows you to add state to a functional component.",
      longAnswer:
        "useState() is a React hook that lets you add state to functional components. It takes an initial state value as an argument and returns an array with the current state and a function to update it.",
    },
    {
      question: "What is useEffect() in React?",
      shortAnswer:
        "useEffect() is a hook that handles side effects in a functional component.",
      longAnswer:
        "useEffect() allows you to perform side effects in your components, such as data fetching, DOM manipulation, or setting up subscriptions. It runs after the render and can be configured to run only when specific dependencies change.",
    },
    {
      question: "What is the Context API in React?",
      shortAnswer:
        "The Context API is a way to pass data through the component tree without prop drilling.",
      longAnswer:
        "The Context API allows you to share values like themes, authentication states, or user preferences globally across components without passing props down through every level of the component tree. It consists of React.createContext(), Context.Provider, and Context.Consumer.",
    },
    {
      question: "What is React Router?",
      shortAnswer:
        "React Router is a library that enables navigation and routing in a React application.",
      longAnswer:
        "React Router allows you to navigate between different views or pages in a single-page application (SPA) without reloading the page. It maps URLs to components, enabling the creation of dynamic, client-side routes.",
    },
    {
      question: "What is Redux?",
      shortAnswer:
        "Redux is a state management library for JavaScript applications.",
      longAnswer:
        "Redux is a predictable state container that helps manage the state of an application in a centralized store. It allows actions to update the state and provides middleware for handling asynchronous logic, making it easier to track state changes across the app.",
    },
    {
      question:
        "What is the difference between controlled and uncontrolled components?",
      shortAnswer:
        "Controlled components have their state managed by React, while uncontrolled components handle their own state internally.",
      longAnswer:
        "In a controlled component, React manages the input state through state and event handlers. In an uncontrolled component, the DOM handles the input's state, and React doesn't manage it. Controlled components are preferred in React for better consistency and predictability.",
    },
    {
      question: "What is the significance of keys in React?",
      shortAnswer:
        "Keys help React identify which items in a list are changed, added, or removed.",
      longAnswer:
        "Keys are unique identifiers used when rendering lists of elements. They help React efficiently update the UI by determining which elements need to be re-rendered when the state or props change. Keys should be stable and unique for each list item.",
    },
    {
      question: "What is the 'render' method in React?",
      shortAnswer:
        "The 'render' method is used to describe what should be rendered to the UI.",
      longAnswer:
        "In class components, the render() method is responsible for returning the JSX that defines the component's UI. It is called whenever there is a change in state or props.",
    },
    {
      question: "What is component lifecycle in React?",
      shortAnswer:
        "Component lifecycle refers to the different stages a component goes through from creation to destruction.",
      longAnswer:
        "In React, components go through several lifecycle phases: mounting, updating, and unmounting. Lifecycle methods (in class components) like componentDidMount(), componentDidUpdate(), and componentWillUnmount() allow you to perform actions at each phase.",
    },
    {
      question: "What is the purpose of shouldComponentUpdate()?",
      shortAnswer:
        "shouldComponentUpdate() is used to optimize rendering by preventing unnecessary re-renders.",
      longAnswer:
        "shouldComponentUpdate() is a lifecycle method that determines if a component needs to re-render. By returning false, you can prevent React from re-rendering the component, which can improve performance, especially in large apps.",
    },
    {
      question: "What is React's reconciliation algorithm?",
      shortAnswer:
        "React uses a reconciliation algorithm to efficiently update the DOM when state or props change.",
      longAnswer:
        "React's reconciliation algorithm (also known as the diffing algorithm) compares the new virtual DOM with the previous one to determine the most efficient way to update the real DOM. It uses a minimal set of changes to keep the DOM in sync with the state of the application.",
    },
    {
      question: "What are higher-order components (HOCs) in React?",
      shortAnswer:
        "HOCs are functions that take a component and return a new component with added functionality.",
      longAnswer:
        "A higher-order component (HOC) is a pattern in React for reusing component logic. An HOC is a function that takes a component and returns a new component with additional props or behavior.",
    },
    {
      question: "What is React.memo?",
      shortAnswer:
        "React.memo is a higher-order component that memoizes the component to prevent unnecessary re-renders.",
      longAnswer:
        "React.memo is used to optimize performance by memoizing a component. It prevents re-renders if the props of the component do not change, similar to React's PureComponent for class components.",
    },
    {
      question: "What are fragments in React?",
      shortAnswer:
        "Fragments are a way to group multiple elements without adding an extra node to the DOM.",
      longAnswer:
        "Fragments allow you to return multiple elements from a component without wrapping them in an extra DOM element, such as a div. This can reduce unnecessary DOM nodes and improve performance.",
    },
    {
      question: "What are refs in React?",
      shortAnswer:
        "Refs are used to reference DOM elements or React components directly.",
      longAnswer:
        "Refs provide a way to directly access DOM nodes or class component instances. They can be useful for interacting with the DOM, such as focusing an input element or triggering animations.",
    },
    {
      question: "What is useContext() in React?",
      shortAnswer:
        "useContext() is a hook that allows you to access the value of a context directly.",
      longAnswer:
        "useContext() is a hook that allows functional components to subscribe to context values. It eliminates the need to use Context.Consumer and provides a more convenient way to access context data.",
    },
    {
      question: "What is PropTypes in React?",
      shortAnswer:
        "PropTypes is a library for runtime type-checking of props in React components.",
      longAnswer:
        "PropTypes allows you to specify the expected types for props in a React component, providing warnings in development when props do not match the expected types. It's helpful for catching bugs early in development.",
    },
    {
      question:
        "What is the difference between static and dynamic imports in React?",
      shortAnswer:
        "Static imports are resolved at compile-time, while dynamic imports are resolved at runtime.",
      longAnswer:
        "Static imports are imported at the top of the file and are bundled during the build process, while dynamic imports use the import() function to load modules only when needed, allowing for lazy loading and reducing the initial bundle size.",
    },
  ];

  return (
    <div className="max-w-full mx-auto md:p-5 p-2">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        React Interview Questions
      </h2>
      <div className="space-y-6">
        <QuestionsList questions={questions} />
      </div>
    </div>
  );
};

export default React;
