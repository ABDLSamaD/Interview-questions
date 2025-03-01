import React from "react"
import Question from "./Question"
import Timer from "./Timer"
import questionsData from "./mernQuestions.json"

const QuestionList = ({ category }) => {
  const questions = questionsData[category]

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Timer />
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        {category.charAt(0).toUpperCase() + category.slice(1)} Interview Questions
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
  )
}

export default QuestionList

