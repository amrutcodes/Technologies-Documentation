import React from "react";
import postmanImg from "./../assets/postman.png";

const PostmanPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={postmanImg}
            alt="postman"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          The Essential API Testing Tool
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          Postman is a popular API testing tool that allows developers to test,
          develop, and document APIs with ease. It provides a user-friendly
          interface for making HTTP requests and viewing the responses, helping
          ensure that APIs behave as expected before they go live. Postman is
          widely used for testing RESTful APIs, and it simplifies the process of
          managing API requests with collections and environments.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of Postman:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            API Request and Response Testing
          </li>
          <p>
            Postman makes it easy to send HTTP requests to test APIs. You can send
            GET, POST, PUT, DELETE, and other request types, and view the response
            including status codes, headers, and body content.
          </p>
          <br />

          <li className="font-semibold text-2xl">Collections and Environments</li>
          <p>
            Postman allows you to group requests into collections, which can be
            organized for different projects or environments. This makes it easy
            to reuse API requests and organize tests.
          </p>
          <br />

          <li className="font-semibold text-2xl">Automated Testing</li>
          <p>
            With Postman, you can automate the testing process by writing test
            scripts in JavaScript. You can write assertions to verify API responses
            and automate the testing process using the collection runner.
          </p>
          <br />

          <li className="font-semibold text-2xl">Mock Servers</li>
          <p>
            Postman enables you to create mock servers to simulate API responses.
            This helps developers test their applications even before the actual
            API is available.
          </p>
          <br />

          <li className="font-semibold text-2xl">API Documentation</li>
          <p>
            Postman automatically generates detailed API documentation, which
            can be shared with other developers or teams. The documentation is
            kept up-to-date as the API evolves.
          </p>
          <br />

          <li className="font-semibold text-2xl">Collaboration and Team Work</li>
          <p>
            Postman provides tools for collaboration, allowing teams to share
            collections, environments, and tests, ensuring everyone is on the same
            page.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Easy-to-use interface for testing APIs.</li>
          <li>Supports automated testing with test scripts.</li>
          <li>Provides features for collaboration among teams.</li>
          <li>Helps with documentation generation and versioning.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Can become slow when handling large collections.</li>
          <li>Limited support for non-HTTP protocols.</li>
          <li>Some advanced features require a paid version.</li>
        </ul>
      </div>
    </div>
  );
};

export default PostmanPage;
