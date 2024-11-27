import React from "react";
import jsImg from "./../assets/javascript.png";

const JavaScriptPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={jsImg}
            alt="javascript"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          The Language of the Web
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          JavaScript is a high-level, interpreted programming language that enables dynamic and interactive features on websites. It is widely used for client-side scripting, allowing for the creation of responsive user interfaces. JavaScript also powers the backend through Node.js, making it a versatile language for both frontend and backend development. JavaScript has become one of the most popular and essential languages for web development.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of JavaScript:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Versatility
          </li>
          <p>
            JavaScript is used for both front-end and back-end development, making it a full-stack language. It allows developers to build interactive websites and applications.
          </p>
          <br />

          <li className="font-semibold text-2xl">Asynchronous Programming</li>
          <p>
            JavaScript supports asynchronous programming through callbacks, promises, and async/await, enabling non-blocking operations and efficient handling of I/O operations.
          </p>
          <br />

          <li className="font-semibold text-2xl">Event-Driven Programming</li>
          <p>
            JavaScript allows for event-driven programming, making it perfect for building interactive web applications. Events such as user clicks, form submissions, and page loads trigger specific actions in the code.
          </p>
          <br />

          <li className="font-semibold text-2xl">Dynamic Typing</li>
          <p>
            JavaScript is dynamically typed, meaning that variable types are determined at runtime rather than compile-time, providing flexibility and ease of use.
          </p>
          <br />

          <li className="font-semibold text-2xl">Rich Ecosystem and Libraries</li>
          <p>
            JavaScript has a vast ecosystem with numerous libraries and frameworks like React, Angular, and Vue for front-end development, as well as Node.js for back-end development.
          </p>
          <br />

          <li className="font-semibold text-2xl">Cross-Platform Compatibility</li>
          <p>
            JavaScript runs on all major browsers and operating systems, making it a truly cross-platform language for building web applications.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Wide usage for both client-side and server-side applications.</li>
          <li>Large community and ecosystem with plenty of frameworks and tools.</li>
          <li>Asynchronous nature allows efficient handling of tasks like network requests.</li>
          <li>Runs in all major web browsers, ensuring cross-platform compatibility.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Dynamic typing can lead to runtime errors if not carefully managed.</li>
          <li>JavaScript’s single-threaded nature can sometimes be limiting for CPU-intensive tasks.</li>
          <li>Different browsers may interpret JavaScript differently, requiring careful testing and compatibility checks.</li>
        </ul>
      </div>
    </div>
  );
};

export default JavaScriptPage;
