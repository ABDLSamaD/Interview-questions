import React from "react";
import Question from "../Components/Question";

const MongoDB = () => {
  const questions = [
    {
      question: "What is MongoDB?",
      shortAnswer: "A document-oriented NoSQL database.",
      longAnswer:
        "MongoDB is a document-oriented NoSQL database that provides high performance, high availability, and easy scalability. It works on the concept of collections and documents instead of tables and rows as in relational databases. MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.",
      codeExample: `
// Example MongoDB document
{
  _id: ObjectId("5099803df3f4948bd2f98391"),
  name: { first: "Alan", last: "Turing" },
  birth: new Date('Jun 23, 1912'),
  death: new Date('Jun 07, 1954'),
  contribs: [ "Turing machine", "Turing test", "Turingery" ],
  views : NumberLong(1250000)
}
      `,
    },
    {
      question: "What are the key features of MongoDB?",
      shortAnswer:
        "Document-oriented, high performance, high availability, easy scalability, rich queries.",
      longAnswer:
        "MongoDB's key features include its document-oriented structure, which allows for flexible and dynamic schemas. It offers high performance for both reads and writes, automatic sharding for horizontal scalability, and built-in replication for high availability. MongoDB also supports rich queries, indexing, and aggregation framework for powerful data analysis.",
    },
    {
      question: "Explain the concept of sharding in MongoDB.",
      shortAnswer:
        "Distributing data across multiple machines for horizontal scaling.",
      longAnswer:
        "Sharding in MongoDB is a method for distributing data across multiple machines to support deployments with very large data sets and high throughput operations. It's MongoDB's approach to scaling horizontally. MongoDB uses sharding to support deployments with very large data sets and high throughput operations. Database systems with large data sets or high throughput applications can challenge the capacity of a single server.",
      codeExample: `
// Enable sharding for a database
sh.enableSharding("myDatabase")

// Shard a collection based on a key
sh.shardCollection("myDatabase.myCollection", { "shardKey": 1 })
      `,
    },
    {
      question: "What is the difference between SQL and MongoDB?",
      shortAnswer:
        "SQL is table-based, MongoDB is document-based with flexible schema.",
      longAnswer:
        "SQL databases are table-based, while MongoDB is document-based. SQL databases have a predefined schema, while MongoDB has a dynamic schema for unstructured data. SQL databases are vertically scalable, while MongoDB is horizontally scalable. SQL databases use SQL (structured query language) for defining and manipulating the data, while MongoDB uses JSON-like documents to store data. SQL databases are better for multi-row transactions, while MongoDB is better for unstructured data like documents or JSON.",
    },
    {
      question: "Explain indexing in MongoDB.",
      shortAnswer:
        "A data structure that improves the speed of data retrieval operations.",
      longAnswer:
        "Indexing in MongoDB is similar to indexing in other database systems. Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e., scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect.",
      codeExample: `
// Create a single field index
db.collection.createIndex({ "field": 1 })

// Create a compound index
db.collection.createIndex({ "field1": 1, "field2": -1 })
      `,
    },
    {
      question: "What is the aggregation framework in MongoDB?",
      shortAnswer: "A way to process data and return computed results.",
      longAnswer:
        "The aggregation framework is a set of analytical tools within MongoDB that allow you to do analytics on documents in one or more collections. It's based on the concept of a pipeline, where you can pass the documents of a collection through a pipeline of one or more stages, each of which performs a different operation on the documents. Common operations include filtering, grouping, sorting, and computing values.",
      codeExample: `
db.orders.aggregate([
   { $match: { status: "A" } },
   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
   { $sort: { total: -1 } }
])
      `,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        MongoDB Interview Questions
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

export default MongoDB;
