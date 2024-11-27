import React from "react";
import nodeImg from "./../assets/nodejs.svg";

const NodeJsPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={nodeImg}
            alt="node"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          The JavaScript runtime built on Chrome's V8 engine
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          Node.js is a runtime environment that allows JavaScript to be run on the
          server side. It is built on Chrome's V8 JavaScript engine and enables
          developers to build scalable and high-performance web applications.
          Node.js is widely used for building backend services, real-time applications,
          and APIs, leveraging the asynchronous and event-driven architecture.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of Node.js:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Non-blocking, Asynchronous I/O
          </li>
          <p>
            Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight
            and efficient for handling concurrent requests. It allows Node.js to handle thousands
            of connections simultaneously without blocking.
          </p>
          <br />

          <li className="font-semibold text-2xl">Single-Threaded Event Loop</li>
          <p>
            Despite being single-threaded, Node.js can handle many requests concurrently through
            its event loop, processing I/O operations in a non-blocking manner.
          </p>
          <br />

          <li className="font-semibold text-2xl">Built on V8 JavaScript Engine</li>
          <p>
            Node.js is built on Google's V8 JavaScript engine, making it incredibly fast for
            executing JavaScript code outside the browser.
          </p>
          <br />

          <li className="font-semibold text-2xl">NPM (Node Package Manager)</li>
          <p>
            Node.js comes with NPM, a package manager that allows you to easily install and manage
            third-party libraries and tools for your projects, simplifying development.
          </p>
          <br />

          <li className="font-semibold text-2xl">Scalable and High Performance</li>
          <p>
            Node.js allows for scalable network applications, thanks to its event-driven model and
            efficient use of system resources, making it suitable for building fast and scalable
            applications.
          </p>
          <br />

          <li className="font-semibold text-2xl">
            Cross-Platform Development
          </li>
          <p>
            Node.js is cross-platform, meaning you can develop applications that run on Windows,
            Linux, and macOS with minimal changes.
          </p>
          <br />

          <li className="font-semibold text-2xl">Real-Time Applications</li>
          <p>
            Node.js excels in building real-time applications such as chat applications and online
            gaming, where real-time data exchange is crucial.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Fast execution thanks to the V8 engine.</li>
          <li>Scalable and ideal for real-time applications.</li>
          <li>Large ecosystem with NPM, offering many libraries and modules.</li>
          <li>Cross-platform support and a strong community.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Not ideal for CPU-intensive applications.</li>
          <li>Callback hell can occur due to heavy usage of asynchronous code.</li>
          <li>Single-threaded, so it may not be the best for tasks that require multi-threading.</li>
        </ul>
      </div>
    </div>
  );
};

export default NodeJsPage;
