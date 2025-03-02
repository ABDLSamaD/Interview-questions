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
      codeExample: `
        import React from 'react';
        function App() {
          return <h1>Hello, world!</h1>;
        }
        export default App;
      `,
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
      question: "What is a React Hook?",
      shortAnswer:
        "Hooks are functions that let functional components use state and lifecycle features.",
      longAnswer:
        "Hooks were introduced in React 16.8 to allow functional components to use state and other React features without writing a class. The most common hooks include useState, useEffect, and useContext.",
      codeExample: `
        import React, { useState } from 'react';
        function Counter() {
          const [count, setCount] = useState(0);
          return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
        }
      `,
    },
    {
      question: "What is the difference between useState and useReducer?",
      shortAnswer:
        "useState is simpler, while useReducer is better for complex state logic.",
      longAnswer:
        "useState is used to handle simple state logic, whereas useReducer is preferred when dealing with complex state transitions that involve multiple actions and dependencies.",
      codeExample: `
        import React, { useReducer } from 'react';
        const reducer = (state, action) => {
          switch (action.type) {
            case 'increment':
              return { count: state.count + 1 };
            case 'decrement':
              return { count: state.count - 1 };
            default:
              return state;
          }
        };
        function Counter() {
          const [state, dispatch] = useReducer(reducer, { count: 0 });
          return (
            <div>
              <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
              <span>{state.count}</span>
              <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </div>
          );
        }
      `,
    },
    {
      question: "What is React Suspense?",
      shortAnswer: "Suspense lets components wait for data before rendering.",
      longAnswer:
        "React Suspense is a feature that allows components to delay rendering until some asynchronous operation, such as data fetching, is complete. This improves user experience by preventing unnecessary UI flickering.",
      codeExample: `
        import React, { Suspense, lazy } from 'react';
        const LazyComponent = lazy(() => import('./LazyComponent'));
        function App() {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </Suspense>
          );
        }
      `,
    },
    {
      question: "What is React Server Components?",
      shortAnswer:
        "React Server Components allow rendering components on the server for better performance.",
      longAnswer:
        "React Server Components (RSC) allow components to be rendered on the server, reducing the amount of JavaScript sent to the client. This results in faster load times and improved performance.",
    },
    {
      question: "What is the difference between SSR and CSR?",
      shortAnswer:
        "SSR renders pages on the server, while CSR renders pages in the browser.",
      longAnswer:
        "Server-side rendering (SSR) generates the page on the server before sending it to the client, improving SEO and initial load performance. Client-side rendering (CSR) loads minimal HTML and renders the content dynamically using JavaScript.",
      codeExample: `
        // Next.js SSR example
        export async function getServerSideProps() {
          const data = await fetchData();
          return { props: { data } };
        }
        function Page({ data }) {
          return <div>{data}</div>;
        }
        export default Page;
      `,
    },
    {
      question: "What is hydration in React?",
      shortAnswer:
        "Hydration is the process of attaching event handlers to server-rendered HTML.",
      longAnswer:
        "When using server-side rendering, React first sends static HTML to the client. Once the JavaScript loads, React 'hydrates' the page by attaching event listeners and making it interactive.",
      codeExample: `
        ReactDOM.hydrate(<App />, document.getElementById('root'));
      `,
    },
    {
      question: "What is the Virtual DOM?",
      shortAnswer:
        "The Virtual DOM is a lightweight copy of the real DOM used for efficient updates.",
      longAnswer:
        "The Virtual DOM is a lightweight representation of the real DOM. React uses it to optimize rendering by comparing the Virtual DOM with the real DOM and applying only the necessary updates.",
    },
    {
      question: "What are React Fragments?",
      shortAnswer:
        "Fragments allow grouping multiple elements without adding extra nodes to the DOM.",
      longAnswer:
        "React Fragments let you group a list of children without adding an extra DOM node. This is useful when you need to return multiple elements from a component.",
      codeExample: `
        function App() {
          return (
            <>
              <h1>Hello</h1>
              <h2>World</h2>
            </>
          );
        }
      `,
    },
    {
      question: "What is the Context API?",
      shortAnswer:
        "The Context API provides a way to pass data through the component tree without props.",
      longAnswer:
        "The Context API allows you to share data (like themes or authentication) across the component tree without passing props manually at every level. It consists of a Provider and a Consumer.",
      codeExample: `
        const ThemeContext = React.createContext('light');
        function App() {
          return (
            <ThemeContext.Provider value="dark">
              <Toolbar />
            </ThemeContext.Provider>
          );
        }
      `,
    },
    {
      question: "What is React.memo?",
      shortAnswer:
        "React.memo is a higher-order component for optimizing functional components.",
      longAnswer:
        "React.memo is used to memoize functional components, preventing unnecessary re-renders when the props haven't changed. It is similar to PureComponent for class components.",
      codeExample: `
        const MyComponent = React.memo(function MyComponent(props) {
          return <div>{props.value}</div>;
        });
      `,
    },
    {
      question:
        "What is the difference between controlled and uncontrolled components?",
      shortAnswer:
        "Controlled components manage state via React, while uncontrolled components use the DOM.",
      longAnswer:
        "Controlled components store their state in React and update it via setState. Uncontrolled components rely on the DOM to manage their state, often using refs.",
      codeExample: `
        // Controlled Component
        function ControlledInput() {
          const [value, setValue] = useState('');
          return <input value={value} onChange={(e) => setValue(e.target.value)} />;
        }
  
        // Uncontrolled Component
        function UncontrolledInput() {
          const inputRef = useRef();
          return <input ref={inputRef} />;
        }
      `,
    },
    {
      question: "What is React Router?",
      shortAnswer:
        "React Router is a library for routing in React applications.",
      longAnswer:
        "React Router allows you to define routes in a React application, enabling navigation between different components without reloading the page. It supports dynamic routing and nested routes.",
      codeExample: `
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
        function App() {
          return (
            <Router>
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
              </Switch>
            </Router>
          );
        }
      `,
    },
    {
      question: "What is Redux?",
      shortAnswer:
        "Redux is a state management library for React applications.",
      longAnswer:
        "Redux is a predictable state container for JavaScript apps. It helps manage global state in a centralized store and makes state changes predictable through actions and reducers.",
      codeExample: `
        // Redux Store
        const store = createStore(reducer);
  
        // Reducer
        function reducer(state = {}, action) {
          switch (action.type) {
            case 'INCREMENT':
              return { count: state.count + 1 };
            default:
              return state;
          }
        }
      `,
    },
    {
      question: "What is the difference between Redux and Context API?",
      shortAnswer:
        "Redux is more feature-rich, while Context API is simpler and built into React.",
      longAnswer:
        "Redux provides advanced features like middleware, time-travel debugging, and a centralized store. Context API is simpler and built into React, but it lacks some of Redux's advanced capabilities.",
    },
    {
      question: "What is React Testing Library?",
      shortAnswer:
        "React Testing Library is a tool for testing React components.",
      longAnswer:
        "React Testing Library encourages testing components in a way that resembles how users interact with them. It focuses on testing behavior rather than implementation details.",
      codeExample: `
        import { render, screen } from '@testing-library/react';
        import App from './App';
  
        test('renders learn react link', () => {
          render(<App />);
          const linkElement = screen.getByText(/learn react/i);
          expect(linkElement).toBeInTheDocument();
        });
      `,
    },
    {
      question: "What is React Portals?",
      shortAnswer:
        "Portals allow rendering children outside the parent DOM hierarchy.",
      longAnswer:
        "React Portals let you render a child component outside its parent DOM node. This is useful for modals, tooltips, and other UI elements that need to break out of their container.",
      codeExample: `
        function Modal({ children }) {
          return ReactDOM.createPortal(
            <div className="modal">{children}</div>,
            document.getElementById('modal-root')
          );
        }
      `,
    },
    {
      question: "What is React Error Boundaries?",
      shortAnswer:
        "Error Boundaries catch JavaScript errors in child components.",
      longAnswer:
        "Error Boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the app.",
      codeExample: `
        class ErrorBoundary extends React.Component {
          state = { hasError: false };
          static getDerivedStateFromError(error) {
            return { hasError: true };
          }
          render() {
            if (this.state.hasError) {
              return <h1>Something went wrong.</h1>;
            }
            return this.props.children;
          }
        }
      `,
    },
    {
      question: "What is React Lazy Loading?",
      shortAnswer:
        "Lazy loading delays loading components until they are needed.",
      longAnswer:
        "React Lazy Loading allows you to load components only when they are required, reducing the initial bundle size and improving performance.",
      codeExample: `
        const LazyComponent = React.lazy(() => import('./LazyComponent'));
        function App() {
          return (
            <Suspense fallback={<div>Loading...</div>}>
              <LazyComponent />
            </Suspense>
          );
        }
      `,
    },
    {
      question: "What is React Concurrent Mode?",
      shortAnswer:
        "Concurrent Mode enables rendering without blocking the main thread.",
      longAnswer:
        "Concurrent Mode is an experimental feature in React that allows rendering to be interruptible, enabling smoother user experiences by avoiding blocking the main thread.",
    },
    {
      question: "What is React Fiber?",
      shortAnswer:
        "React Fiber is a reimplementation of React's core algorithm.",
      longAnswer:
        "React Fiber is a complete rewrite of React's reconciliation algorithm. It enables features like Concurrent Mode and improves performance by breaking rendering work into smaller chunks.",
    },
    {
      question: "What is React PropTypes?",
      shortAnswer: "PropTypes is a type-checking library for React props.",
      longAnswer:
        "PropTypes allows you to define the expected types of props passed to a component. It helps catch bugs by validating prop types during development.",
      codeExample: `
        import PropTypes from 'prop-types';
        function MyComponent({ name }) {
          return <div>{name}</div>;
        }
        MyComponent.propTypes = {
          name: PropTypes.string.isRequired,
        };
      `,
    },
    {
      question: "What is React Strict Mode?",
      shortAnswer:
        "Strict Mode highlights potential problems in your application.",
      longAnswer:
        "React Strict Mode is a tool for identifying potential issues in your app. It activates additional checks and warnings for deprecated features and unsafe lifecycle methods.",
      codeExample: `
        function App() {
          return (
            <React.StrictMode>
              <MyComponent />
            </React.StrictMode>
          );
        }
      `,
    },
    {
      question: "What is React Refs?",
      shortAnswer: "Refs provide a way to access DOM nodes or React elements.",
      longAnswer:
        "Refs are used to directly access DOM nodes or React elements. They are commonly used for managing focus, text selection, or integrating with third-party libraries.",
      codeExample: `
        function MyComponent() {
          const inputRef = useRef();
          return <input ref={inputRef} />;
        }
      `,
    },
    {
      question: "What is React Higher-Order Components (HOC)?",
      shortAnswer:
        "HOCs are functions that take a component and return a new component.",
      longAnswer:
        "Higher-Order Components are functions that accept a component and return a new component with additional props or behavior. They are used for code reuse and logic sharing.",
      codeExample: `
        function withLogging(WrappedComponent) {
          return function(props) {
            console.log('Rendered:', WrappedComponent.name);
            return <WrappedComponent {...props} />;
          };
        }
      `,
    },
    {
      question: "What is React Render Props?",
      shortAnswer:
        "Render Props is a pattern for sharing code between components.",
      longAnswer:
        "Render Props is a technique where a component's prop is a function that returns a React element. This allows components to share logic without using HOCs.",
      codeExample: `
        function DataProvider({ render }) {
          const data = fetchData();
          return render(data);
        }
      `,
    },
    {
      question: "What is React Context vs Redux?",
      shortAnswer:
        "Context is built into React, while Redux is a standalone library.",
      longAnswer:
        "React Context is a built-in feature for sharing data across the component tree. Redux is a standalone library with advanced features like middleware and time-travel debugging.",
    },
    {
      question: "What is React DevTools?",
      shortAnswer:
        "React DevTools is a browser extension for debugging React apps.",
      longAnswer:
        "React DevTools is a browser extension that allows you to inspect the React component hierarchy, view props and state, and debug performance issues.",
    },
    {
      question: "What is React PureComponent?",
      shortAnswer:
        "PureComponent is a class component that implements shouldComponentUpdate.",
      longAnswer:
        "PureComponent is a class component that automatically implements shouldComponentUpdate with a shallow prop and state comparison. It prevents unnecessary re-renders.",
      codeExample: `
        class MyComponent extends React.PureComponent {
          render() {
            return <div>{this.props.value}</div>;
          }
        }
      `,
    },
    {
      question: "What is React Keys?",
      shortAnswer:
        "Keys help React identify which items have changed, been added, or removed.",
      longAnswer:
        "Keys are special attributes used by React to identify elements in a list. They help React efficiently update the UI by tracking changes to the list.",
      codeExample: `
        function List({ items }) {
          return (
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          );
        }
      `,
    },
    {
      question: "What is React Children?",
      shortAnswer:
        "React Children is a utility for working with child components.",
      longAnswer:
        "React.Children provides utilities for working with child components, such as mapping over children or counting them.",
      codeExample: `
        function MyComponent({ children }) {
          return <div>{React.Children.map(children, (child) => child)}</div>;
        }
      `,
    },
    {
      question: "What is React SyntheticEvent?",
      shortAnswer:
        "SyntheticEvent is a cross-browser wrapper around native browser events.",
      longAnswer:
        "SyntheticEvent is a wrapper around native browser events that provides a consistent API across different browsers. It is used in React event handlers.",
      codeExample: `
        function MyComponent() {
          const handleClick = (e) => {
            console.log(e.target);
          };
          return <button onClick={handleClick}>Click Me</button>;
        }
      `,
    },
    {
      question: "What is React Reconciliation?",
      shortAnswer:
        "Reconciliation is the process of updating the DOM to match the Virtual DOM.",
      longAnswer:
        "Reconciliation is the algorithm React uses to compare the Virtual DOM with the real DOM and apply the necessary updates. It ensures efficient rendering.",
    },
    {
      question: "What is React Context vs Props Drilling?",
      shortAnswer:
        "Context avoids prop drilling by sharing data across the component tree.",
      longAnswer:
        "Prop drilling is the process of passing props through multiple levels of components. Context API avoids this by allowing data to be shared across the component tree without passing props manually.",
    },
    {
      question: "What is React ForwardRef?",
      shortAnswer: "ForwardRef allows passing refs to child components.",
      longAnswer:
        "ForwardRef is a technique for passing refs from a parent component to a child component. It is useful for accessing DOM nodes in child components.",
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
