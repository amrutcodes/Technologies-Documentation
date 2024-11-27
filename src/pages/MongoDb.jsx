import React from "react";
import mongodbImg from "./../assets/mongodb.png";

const MongoDBPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={mongodbImg}
            alt="mongodb"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          The NoSQL database for modern applications
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          MongoDB is a document-based, NoSQL database that provides high performance,
          scalability, and flexibility. It is designed to store and manage large volumes
          of unstructured or semi-structured data. MongoDB is widely used in modern web
          applications due to its ease of use, ability to handle large datasets, and
          flexibility in data modeling. It allows developers to store data in JSON-like
          format, making it a great choice for applications with evolving or complex data
          requirements.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of MongoDB:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Document-Oriented Storage
          </li>
          <p>
            MongoDB stores data in flexible, JSON-like documents, making it easier to work with
            complex data structures and ensuring that developers can store unstructured and
            semi-structured data.
          </p>
          <br />

          <li className="font-semibold text-2xl">High Performance</li>
          <p>
            MongoDB is designed for high performance, offering fast read and write operations,
            as well as indexing and aggregation features to improve query efficiency.
          </p>
          <br />

          <li className="font-semibold text-2xl">Scalability</li>
          <p>
            MongoDB supports horizontal scaling through sharding, allowing it to distribute
            data across multiple servers to accommodate growing datasets and ensure that
            applications remain responsive.
          </p>
          <br />

          <li className="font-semibold text-2xl">Flexible Schema</li>
          <p>
            MongoDB’s flexible schema allows you to store documents of different structures in
            the same collection, making it ideal for handling data with varying attributes and
            formats.
          </p>
          <br />

          <li className="font-semibold text-2xl">Aggregation Framework</li>
          <p>
            MongoDB provides a powerful aggregation framework for processing and transforming
            data, allowing you to perform complex queries and analytics within the database
            itself.
          </p>
          <br />

          <li className="font-semibold text-2xl">Replication</li>
          <p>
            MongoDB offers built-in replication, which ensures data redundancy and high
            availability. This feature automatically replicates data to multiple servers, making
            the database fault-tolerant.
          </p>
          <br />

          <li className="font-semibold text-2xl">Strong Consistency</li>
          <p>
            MongoDB ensures strong consistency by using a replica set for each database, meaning
            the latest write is always available to the application, even in case of node
            failures.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Flexible schema that makes it easy to handle complex and evolving data.</li>
          <li>Scalable, offering support for large datasets and high throughput.</li>
          <li>High performance and quick data retrieval with indexing and aggregation features.</li>
          <li>Built-in replication for high availability and fault tolerance.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Not ideal for applications that require complex transactions or relationships.</li>
          <li>Can be more challenging to manage when dealing with very large amounts of data or high traffic.</li>
          <li>Lack of support for joins and other relational features may require additional effort in certain use cases.</li>
        </ul>
      </div>
    </div>
  );
};

export default MongoDBPage;
