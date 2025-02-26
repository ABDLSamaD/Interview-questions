import React, { useState, useMemo } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Question = ({ question, shortAnswer, longAnswer, codeExample }) => {
  const [isOpen, setIsOpen] = useState(false);

  const memoizedCodeExample = useMemo(() => {
    if (!codeExample) return null;
    return (
      <div className="rounded-md overflow-hidden mt-4">
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={{
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            borderRadius: "0.375rem",
          }}
        >
          {codeExample}
        </SyntaxHighlighter>
      </div>
    );
  }, [codeExample]);

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md overflow-hidden mb-6 border border-gray-200 transition-all duration-300 hover:shadow-lg">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 mb-4 font-medium">
            Short Answer: {shortAnswer}
          </p>
          <p className="text-gray-700 mb-4">Long Answer: {longAnswer}</p>
          {memoizedCodeExample}
        </div>
      )}
    </div>
  );
};

export default Question;
