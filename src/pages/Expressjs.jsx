import React from "react";
import expressImg from "./../assets/expressjs.png";

const ExpressPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={expressImg}
            alt="express"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          The minimalistic web framework for Node.js
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          Express.js is a minimal and flexible Node.js web application framework
          that provides a robust set of features for building web and mobile
          applications. It simplifies the process of creating server-side
          applications and APIs, helping developers create fast and scalable web
          applications with ease.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of Express:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Minimal and Flexible
          </li>
          <p>
            Express is designed to be minimalistic, providing only the essentials
            for building web applications. It offers flexibility, allowing
            developers to choose libraries and tools that best fit their needs.
          </p>
          <br />

          <li className="font-semibold text-2xl">Routing</li>
          <p>
            Express provides an intuitive and powerful routing system to handle
            HTTP requests, making it easy to build dynamic APIs and web
            applications.
          </p>
          <br />

          <li className="font-semibold text-2xl">Middleware Support</li>
          <p>
            Express allows you to use middleware, which are functions that process
            requests before they reach the route handlers. This enables
            functionalities like authentication, logging, and body parsing.
          </p>
          <br />

          <li className="font-semibold text-2xl">Templating Engines</li>
          <p>
            Express supports templating engines like Pug and EJS, enabling dynamic
            rendering of HTML pages with data from the server.
          </p>
          <br />

          <li className="font-semibold text-2xl">Easy Integration with Databases</li>
          <p>
            Express can be easily integrated with databases such as MongoDB,
            MySQL, and PostgreSQL, allowing developers to store and manage data
            efficiently.
          </p>
          <br />

          <li className="font-semibold text-2xl">
            Scalable and Extensible
          </li>
          <p>
            Express is highly scalable, supporting the creation of both small and
            large applications. It’s extensible, allowing you to add any additional
            features and tools you may need.
          </p>
          <br />

          <li className="font-semibold text-2xl">Fast and Lightweight</li>
          <p>
            Express is fast and lightweight, meaning it can handle a large number
            of requests with minimal overhead, ensuring high performance.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Minimalistic and easy to use.</li>
          <li>Flexible and extensible for a wide range of applications.</li>
          <li>Strong community and vast documentation.</li>
          <li>Support for various templating engines and databases.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Lack of structure can lead to unorganized code in larger apps.</li>
          <li>Does not provide some built-in features like authentication, unlike other frameworks.</li>
          <li>Can become cumbersome for very large applications with complex requirements.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExpressPage;
