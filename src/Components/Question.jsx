"use client";
import { useState, useEffect, memo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BookOpen, Code, MessageSquare } from "lucide-react";

// Memoized Question Component
const Question = memo(({ question, shortAnswer, longAnswer, codeExample }) => {
  return (
    <div className="bg-gray-300/10 backdrop-blur-md rounded-2xl overflow-hidden mb-8 border border-solid border-gray-500/50">
      <div className="md:p-8 p-2">
        {/* Question */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          {question}
        </h3>

        {/* Short Answer */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <MessageSquare className="w-5 h-5 text-emerald-600 mr-2" />
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              Short Answer
            </p>
          </div>
          <p className="text-gray-700 text-md md:text-base leading-relaxed pl-7">
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
});

Question.displayName = "Question"; // Add display name for debugging

// Parent Component for Batch Loading
const QuestionsList = ({ questions }) => {
  const [visibleQuestions, setVisibleQuestions] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    // Initial load of 4-5 questions
    const initialBatch = questions.slice(0, 5);
    setVisibleQuestions(initialBatch);
    setLoadedCount(5);

    // Load remaining questions after 1 second
    const timer = setTimeout(() => {
      const remainingQuestions = questions.slice(5);
      setVisibleQuestions((prev) => [...prev, ...remainingQuestions]);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [questions]);

  return (
    <div>
      {visibleQuestions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          shortAnswer={q.shortAnswer}
          longAnswer={q.longAnswer}
          codeExample={q.codeExample}
        />
      ))}
    </div>
  );
};

export default QuestionsList;
