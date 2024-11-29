import React from "react";
import expressImg from "./../assets/expressjs.png";
import introImg from "./../assets/express-intro.png";
import routingImg from "./../assets/routing.jpg";
import middlewareImg from "./../assets/middleware.png";
import templateEngineImg from "./../assets/template-engine.jpg";
import restfulImg from "./../assets/restful.png";
import scalabilityImg from "./../assets/scalability.png";
import prosImg from "./../assets/pros.webp";
import consImg from "./../assets/cons.png";

const ExpressPage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-purple-800 to-purple-700 min-h-screen relative">
      {/* Smoke Effect */}
      <div className="absolute inset-0 bg-smoke-pattern opacity-10 z-0"></div>

      {/* Header Section */}
      <div className="relative z-10 py-10">
        <div className="flex justify-center items-center animate-smoke">
          <img
            src={expressImg}
            alt="Express.js Logo"
            className="rounded-lg h-36 w-auto p-2 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500"
          />
        </div>
        <h1 className="text-5xl text-teal-200 font-extrabold text-center mt-5">
          Build Fast, Scalable Apps with Express.js
        </h1>
        <p className="text-gray-300 text-center mt-2 text-lg max-w-3xl mx-auto">
          Dive into Express.js and explore its minimalist design and powerful
          features for crafting web applications.
        </p>
      </div>

      <hr className="border-teal-600 my-8" />

      {/* Introduction Section */}
      <div className="relative flex flex-col items-center p-5">
        <img
          src={introImg}
          alt="Introduction to Express.js"
          className="h-[450px] w-[85%] object-cover rounded-xl shadow-2xl mb-8 transition-transform hover:scale-105"
        />
        <p className="text-gray-200 text-lg text-justify max-w-3xl mx-auto">
          Express.js is a lightweight, unopinionated framework for Node.js,
          enabling developers to build APIs and web applications effortlessly.
          Its flexibility and vast ecosystem make it a favorite for both
          beginners and professionals.
        </p>
      </div>

      {/* Feature Sections */}
      <div className="relative p-5 space-y-10">
        <h2 className="text-teal-300 font-bold text-3xl text-center">
          Explore Express.js Features
        </h2>

        {/* Feature Card 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex-1">
            <img
              src={routingImg}
              alt="Flexible Routing"
              className="w-full h-48 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 text-gray-200 space-y-3">
            <h3 className="text-2xl font-bold">Flexible Routing</h3>
            <p>
              Manage HTTP requests with powerful routing features, supporting
              dynamic and nested routes for all your API needs.
            </p>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex-1">
            <img
              src={middlewareImg}
              alt="Middleware"
              className="w-full h-48 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 text-gray-200 space-y-3">
            <h3 className="text-2xl font-bold">Middleware Support</h3>
            <p>
              Add functionality like authentication, logging, and error handling
              with ease, thanks to Express's robust middleware system.
            </p>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex-1">
            <img
              src={templateEngineImg}
              alt="Template Engines"
              className="w-full h-48 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 text-gray-200 space-y-3">
            <h3 className="text-2xl font-bold">Template Engines</h3>
            <p>
              Create dynamic views with easy integration of popular template
              engines like Pug, EJS, and Handlebars.
            </p>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="p-5 bg-teal-800 bg-opacity-90 rounded-lg shadow-lg mt-10">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5">
          Why Choose Express.js?
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <img
              src={prosImg}
              alt="Advantages"
              className="w-full h-48 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <ul className="flex-1 text-gray-100 list-disc list-inside p-5 space-y-3">
            <li>Minimalist design for rapid prototyping.</li>
            <li>Scales seamlessly for enterprise solutions.</li>
            <li>Rich ecosystem for plugins and extensions.</li>
            <li>Supports cross-platform development.</li>
          </ul>
        </div>
      </div>

      {/* Limitations Section */}
      <div className="p-5 bg-gray-900 rounded-lg shadow-lg mt-10">
        <h2 className="text-teal-300 font-bold text-3xl text-center mb-5">
          Considerations
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <ul className="flex-1 text-gray-300 list-disc list-inside p-5 space-y-3">
            <li>Requires manual setup for advanced features.</li>
            <li>No built-in support for real-time capabilities.</li>
            <li>Unopinionated nature may confuse beginners.</li>
          </ul>
          <div className="flex-1">
            <img
              src={consImg}
              alt="Limitations"
              className="w-full h-48 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scalability Section */}
      <div className="p-5 bg-gradient-to-r from-green-800 via-teal-900 to-gray-900 rounded-lg shadow-lg mt-10">
        {/* Image at the top */}
        <div className="flex justify-center mb-6 w-full h-40">
          <img
            src={scalabilityImg}
            alt="Scalability Illustration"
            className="w-40 h-40 object-cover"
          />
        </div>

        <h2 className="text-green-300 font-bold text-3xl text-center mb-5">
          Achieve Unmatched Scalability
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-5 transition-transform transform hover:scale-105">
            <h3 className="text-teal-300 text-2xl font-bold mb-3">
              Handle Traffic Spikes
            </h3>
            <p className="text-gray-300">
              Scale your application effortlessly to manage sudden surges in
              traffic while maintaining performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-5 transition-transform transform hover:scale-105">
            <h3 className="text-teal-300 text-2xl font-bold mb-3">
              Horizontal Scaling
            </h3>
            <p className="text-gray-300">
              Add more servers to distribute load evenly and optimize resource
              utilization.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-5 transition-transform transform hover:scale-105">
            <h3 className="text-teal-300 text-2xl font-bold mb-3">
              Efficient Resource Management
            </h3>
            <p className="text-gray-300">
              Automate scaling with cloud-native tools to allocate resources
              dynamically based on demand.
            </p>
          </div>
        </div>
      </div>

      {/* RESTful APIs Section */}
      <div className="p-5 bg-gradient-to-b from-blue-800 via-blue-900 to-gray-900 rounded-lg shadow-lg mt-10">
        <h2 className="text-blue-300 font-bold text-3xl text-center mb-5">
          Unlock the Power of RESTful APIs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={restfulImg}
              alt="RESTful APIs"
              className="w-full h-60 object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105"
            />
          </div>
          {/* Content Section */}
          <div className="text-gray-200 space-y-4 p-5">
            <p className="text-lg leading-relaxed">
              RESTful APIs are the backbone of modern web development, enabling
              smooth communication between the client and server.
            </p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Flexible structure for diverse use cases.</li>
              <li>Stateless operations enhance scalability.</li>
              <li>Widely adopted and easy to integrate.</li>
              <li>Ideal for creating secure, efficient web services.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black p-5 text-center text-gray-400 mt-10">
        <p>Express.js Learning Page © 2024</p>
      </footer>
    </div>
  );
};

export default ExpressPage;
