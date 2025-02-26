import React from "react";
import Question from "../Components/Question";

const MongoDB = () => {
  const questions = [
    {
      question: "What is MongoDB?",
      answer:
        "MongoDB is a document-oriented NoSQL database that provides high performance, high availability, and easy scalability. It works on the concept of collections and documents instead of tables and rows as in relational databases.",
    },
    {
      question: "What are the key features of MongoDB?",
      answer:
        "Key features of MongoDB include: document-oriented storage, indexing, replication, sharding, aggregation framework, and ad hoc queries.",
    },
    {
      question: "Explain the concept of sharding in MongoDB.",
      answer:
        "Sharding is a method for distributing data across multiple machines. It's MongoDB's approach to meeting the demands of data growth. As the size of the data increases, a single machine may not be sufficient to store the data nor provide an acceptable read and write throughput. Sharding solves the problem with horizontal scaling.",
      codeExample: `
// Enable sharding for a database
sh.enableSharding("myDatabase")

// Shard a collection based on a key
sh.shardCollection("myDatabase.myCollection", { "shardKey": 1 })
      `,
    },
    {
      question: "What is the difference between SQL and MongoDB?",
      answer:
        "SQL databases are table-based, while MongoDB is document-based. SQL databases have a predefined schema, while MongoDB has a dynamic schema. SQL databases are vertically scalable, while MongoDB is horizontally scalable. SQL uses SQL (structured query language) for defining and manipulating the data, while MongoDB uses JSON-like documents to store data.",
    },
    {
      question: "Explain indexing in MongoDB.",
      answer:
        "Indexing in MongoDB is similar to indexing in other database systems. Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e., scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.",
      codeExample: `
// Create a single field index
db.collection.createIndex({ "field": 1 })

// Create a compound index
db.collection.createIndex({ "field1": 1, "field2": -1 })
      `,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        MongoDB Interview Questions
      </h2>
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          answer={q.answer}
          codeExample={q.codeExample}
        />
      ))}
    </div>
  );
};

export default MongoDB;
