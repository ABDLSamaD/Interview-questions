import React from "react";
import QuestionsList from "../Components/Question";

const MongoDB = () => {
  const questions = [
    {
      question: "What is MongoDB?",
      shortAnswer: "A document-oriented NoSQL database.",
      longAnswer:
        "MongoDB is a document-oriented NoSQL database that provides high performance, high availability, and easy scalability. It works on the concept of collections and documents instead of tables and rows as in relational databases. MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.",
      codeExample:
        '// Example MongoDB document\n{\n  _id: ObjectId("5099803df3f4948bd2f98391"),\n  name: { first: "Alan", last: "Turing" },\n  birth: new Date(\'Jun 23, 1912\'),\n  death: new Date(\'Jun 07, 1954\'),\n  contribs: [ "Turing machine", "Turing test", "Turingery" ],\n  views : NumberLong(1250000)\n}',
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
      codeExample:
        '// Enable sharding for a database\nsh.enableSharding("myDatabase")\n\n// Shard a collection based on a key\nsh.shardCollection("myDatabase.myCollection", { "shardKey": 1 })',
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
      codeExample:
        "// Create a single field index\ndb.collection.createIndex({ 'field': 1 })\n\n// Create a compound index\ndb.collection.createIndex({ 'field1': 1, 'field2': -1 })",
    },
    {
      question: "What is the aggregation framework in MongoDB?",
      shortAnswer: "A way to process data and return computed results.",
      longAnswer:
        "The aggregation framework is a set of analytical tools within MongoDB that allow you to do analytics on documents in one or more collections. It's based on the concept of a pipeline, where you can pass the documents of a collection through a pipeline of one or more stages, each of which performs a different operation on the documents. Common operations include filtering, grouping, sorting, and computing values.",
      codeExample:
        'db.orders.aggregate([\n   { $match: { status: "A" } },\n   { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },\n   { $sort: { total: -1 } }\n])',
    },
    {
      question: "What is a replica set in MongoDB?",
      shortAnswer:
        "A group of MongoDB servers that maintain the same data set.",
      longAnswer:
        "A replica set in MongoDB is a group of MongoDB instances that maintain the same data set. Replica sets provide redundancy and high availability. If the primary server in a replica set fails, one of the secondary servers is automatically promoted to primary, ensuring continued operation. Replica sets also allow for horizontal scaling of read operations by distributing them across secondary servers.",
      codeExample:
        '// Example of a replica set initiation\nrs.initiate({\n  _id: "myReplicaSet",\n  members: [\n    { _id: 0, host: "localhost:27017" },\n    { _id: 1, host: "localhost:27018" },\n    { _id: 2, host: "localhost:27019" }\n  ]\n})',
    },
    {
      question: "What is a capped collection in MongoDB?",
      shortAnswer:
        "A fixed-size collection that automatically overwrites its oldest entries.",
      longAnswer:
        "A capped collection is a special type of collection in MongoDB with a fixed size. When the collection reaches its size limit, the oldest documents are automatically deleted to make room for new ones. Capped collections preserve insertion order and are often used for logging or caching purposes.",
      codeExample:
        '// Create a capped collection with a max size of 1MB and 100 documents\ndb.createCollection("myCappedCollection", { capped: true, size: 1000000, max: 100 })',
    },
    {
      question: "What is the difference between MongoDB and CouchDB?",
      shortAnswer:
        "MongoDB is a document-based NoSQL database, while CouchDB is an HTTP-based document store.",
      longAnswer:
        "Both MongoDB and CouchDB are document-oriented NoSQL databases, but they differ in architecture and features. MongoDB is designed for high performance and scalability, while CouchDB is built around RESTful HTTP API and uses a multi-version concurrency control system (MVCC). CouchDB stores data in JSON format, similar to MongoDB, but it focuses on data availability and fault tolerance in distributed environments, while MongoDB focuses on speed and scalability through sharding and replication.",
      codeExample:
        '// Example of a CouchDB document\n{\n  "_id": "001",\n  "name": "Alice",\n  "age": 29,\n  "city": "New York"\n}',
    },
    {
      question:
        "How does MongoDB handle data consistency in distributed systems?",
      shortAnswer: "Using replica sets and write concern for consistency.",
      longAnswer:
        "MongoDB uses replica sets to maintain data consistency across multiple nodes in a distributed system. Write concern defines the level of acknowledgment requested from MongoDB for write operations, ensuring data consistency and durability. By configuring replica sets and write concerns, MongoDB ensures data integrity across distributed systems.",
      codeExample:
        '// Write concern example in MongoDB\ndb.collection.insert({ name: "Alice" }, { writeConcern: { w: 2 } })',
    },
  ];

  return (
    <div className="max-w-full mx-auto md:p-5 p-2">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        MongoDB Interview Questions
      </h2>
      <div className="space-y-6">
        <QuestionsList questions={questions} />
      </div>
    </div>
  );
};

export default MongoDB;
