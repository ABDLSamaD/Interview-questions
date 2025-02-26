import React from "react";
import { Link } from "react-router-dom";
import { Code, Database, Server, Cpu, HelpCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen text-black">
      {/* Hero Section */}
      <div className="text-center py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6 text-black">
          Master the MERN Stack
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Prepare for your next interview with a comprehensive collection of
          MERN Stack interview questions. From MongoDB to React, we've got you
          covered.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/complex"
            className="bg-indigo-950 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out"
          >
            Explore Complex Questions
          </Link>
          <Link
            to="/mongodb"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* MongoDB Section */}
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20 shadow-md shadow-cyan-100">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-200 rounded-lg mb-4">
              <Database className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">MongoDB</h3>
            <p className="text-gray-700">
              Master NoSQL databases with MongoDB. Learn about collections,
              documents, and queries.
            </p>
            <Link
              to="/mongodb"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 transition-all duration-200 ease-in-out"
            >
              Explore MongoDB →
            </Link>
          </div>

          {/* Express Section */}
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20 shadow-md shadow-cyan-100">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-200 rounded-lg mb-4">
              <Server className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Express</h3>
            <p className="text-gray-700">
              Build robust backends with Express. Understand routing,
              middleware, and error handling.
            </p>
            <Link
              to="/express"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 transition-all duration-200 ease-in-out"
            >
              Explore Express →
            </Link>
          </div>

          {/* React Section */}
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20 shadow-md shadow-cyan-100">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-200 rounded-lg mb-4">
              <Code className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">React</h3>
            <p className="text-gray-700">
              Dive into React. Learn about components, hooks, and state
              management.
            </p>
            <Link
              to="/react"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 transition-all duration-200 ease-in-out"
            >
              Explore React →
            </Link>
          </div>

          {/* Node.js Section */}
          <div className="bg-gray-800/10 backdrop-blur-md rounded-xl p-6 border border-gray-700/20 shadow-md shadow-cyan-100">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-200 rounded-lg mb-4">
              <Cpu className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Node.js</h3>
            <p className="text-gray-700">
              Understand Node.js. Learn about event loops, streams, and APIs.
            </p>
            <Link
              to="/node"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 transition-all duration-200 ease-in-out"
            >
              Explore Node.js →
            </Link>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-800/10 backdrop-blur-md border-t border-gray-700/20 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Ace Your Interview?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our comprehensive collection of MERN Stack interview
            questions and start preparing today.
          </p>
          <Link
            to="/complex"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
