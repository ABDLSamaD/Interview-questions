"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BookOpen, Code, MessageSquare } from "lucide-react";

const Question = ({ question, shortAnswer, longAnswer, codeExample }) => {
  return (
    <div className="bg-gray-600/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden mb-8 border border-solid border-gray-200 hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="p-8">
        {/* Question */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{question}</h3>

        {/* Short Answer */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <MessageSquare className="w-5 h-5 text-emerald-600 mr-2" />
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Short Answer
            </p>
          </div>
          <p className="text-gray-700 text-base leading-relaxed pl-7">
            {shortAnswer}
          </p>
        </div>

        {/* Long Answer */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Detailed Explanation
            </p>
          </div>
          <p className="text-gray-700 text-base leading-relaxed pl-7">
            {longAnswer}
          </p>
        </div>

        {/* Code Example */}
        {codeExample && (
          <div className="mb-4">
            <div className="flex items-center mb-3">
              <Code className="w-5 h-5 text-purple-600 mr-2" />
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                Code Example
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                customStyle={{
                  padding: "1.5rem",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                  borderRadius: "0.75rem",
                }}
              >
                {codeExample}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
