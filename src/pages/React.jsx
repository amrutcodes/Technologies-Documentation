import React from "react";
import reactImg from "./../assets/react2.png";
import IntroImg from "./../assets/reactintro.jpg";
import componentImg from "./../assets/component.jpg";
import jsxImg from "./../assets/jsx.webp";
import virtualDomImg from "./../assets/virtual-dom.png";
import advantagesImg from "./../assets/advantages.webp"; 
import disadvantagesImg from "./../assets/disadvantages.webp"; 
import lifecycleImg from "./../assets/reactlifecycle.jpg";
import ueffecthooksImg from "./../assets/ueffect.jpg";
import ecosystemImg from "./../assets/ecosystem.png";
import UsestateImg from "./../assets/ustatehook.webp";

const ReactPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen">
      {/* Header Section */}
      <div className="py-10">
        <div className="flex justify-center items-center">
          <img
            src={reactImg}
            alt="React Logo"
            className="rounded-lg h-40 w-auto p-2 shadow-2xl transition-transform transform hover:scale-110 hover:rotate-12"
          />
        </div>
        <h1 className="text-4xl text-white font-extrabold text-center mt-5">
          The Library for Web and Native User Interfaces
        </h1>
        <p className="text-white text-center mt-2 text-lg max-w-3xl mx-auto">
          Learn React, the library that powers some of the largest web applications in the world!
        </p>
      </div>

      <hr className="border-slate-600 my-8" />

      {/* Intro Section */}
      <div className="flex flex-col items-center p-5">
        <img
          src={IntroImg}
          alt="React Introduction"
          className="h-[500px] w-[90%] object-cover rounded-xl shadow-2xl mb-8 transition-all hover:scale-105"
        />
        <p className="text-white text-lg text-justify max-w-3xl mx-auto">
          React is a JavaScript library developed by Meta (formerly Facebook) for building user interfaces (UIs). It is particularly well-suited for single-page applications, where users can interact with dynamic content without page reloads. React's component-based architecture allows developers to create reusable and scalable UI pieces that work seamlessly together.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-center mb-5">
          Key Features of React
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards with Images */}
          <div className="bg-slate-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            <img
              src={componentImg}
              alt="Component-Based Architecture"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Component-Based Architecture
            </h3>
            <p className="text-white">
              React breaks the UI into independent, reusable components, making code easier to manage and scale.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            <img
              src={jsxImg}
              alt="JSX Syntax"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-white mb-3">
              JSX (JavaScript XML)
            </h3>
            <p className="text-white">
              JSX lets you write HTML-like syntax directly in JavaScript, making code more readable and intuitive.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            <img
              src={virtualDomImg}
              alt="Virtual DOM"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Virtual DOM
            </h3>
            <p className="text-white">
              React maintains a lightweight Virtual DOM, ensuring efficient updates and improved performance for complex UIs.
            </p>
          </div>
        </div>
      </div>

      {/* How React Works Section */}
      <div className="p-5 bg-slate-700 rounded-lg shadow-lg mt-10">
        <h2 className="text-white font-bold text-3xl text-center mb-5">
          How React Works
        </h2>
        <p className="text-white text-lg text-justify mb-5">
          React uses a declarative paradigm, enabling developers to describe the desired outcome, and React takes care of updating and rendering the UI efficiently. The Virtual DOM minimizes performance costs by only updating the parts of the DOM that have changed, rather than re-rendering the entire UI.
        </p>
        <div className="flex justify-center">
          <img
            src={virtualDomImg}
            alt="How React Works"
            className="w-[80%] rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Advantages Section */}
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-center mb-5">
          Advantages of React
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={advantagesImg}
            alt="Advantages"
            className="w-full lg:w-1/2 h-48 object-cover rounded-lg shadow-2xl mb-3 lg:mb-0 transition-transform hover:scale-105"
          />
          <ul className="text-white list-disc list-inside p-5">
            <li>High performance due to Virtual DOM.</li>
            <li>Reusable components improve development speed and consistency.</li>
            <li>Strong community support with extensive documentation.</li>
            <li>Seamless integration with other JavaScript libraries and frameworks.</li>
          </ul>
        </div>
      </div>

      {/* Disadvantages Section */}
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-center mb-5">
          Disadvantages of React
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={disadvantagesImg}
            alt="Disadvantages"
            className="w-full lg:w-1/2 h-48 object-contain rounded-lg shadow-2xl mb-3 lg:mb-0 transition-transform hover:scale-105"
          />
          <ul className="text-white list-disc list-inside p-5">
            <li>Steep learning curve for beginners.</li>
            <li>Only handles the view layer; requires additional tools for full-stack solutions.</li>
            <li>Frequent updates can sometimes introduce breaking changes.</li>
          </ul>
        </div>
      </div>

      {/* Lifecycle Methods Section */}
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-center mb-5">
          React Lifecycle Methods
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={lifecycleImg}
            alt="React Lifecycle Methods"
            className="w-full lg:w-1/2 h-48 object-contain rounded-lg shadow-2xl mb-3 lg:mb-0 transition-transform hover:scale-105"
          />
          <p className="text-white text-lg text-justify">
            React components have a lifecycle with distinct phases: Mounting, Updating, and Unmounting. Lifecycle methods like `componentDidMount` and `componentDidUpdate` allow developers to control component behavior during these phases.
          </p>
        </div>
      </div>

      {/* React Hooks Section */}
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-center mb-5">
          React Hooks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* useState Hook */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            <img
              src={UsestateImg}
              alt="useState Hook"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-2xl font-semibold text-white mb-3">
              useState Hook
            </h3>
            <p className="text-white">
              The `useState` hook allows you to add state to functional components. It returns a state variable and a function to update it.
            </p>
          </div>
          {/* useEffect Hook */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            <img
              src={ueffecthooksImg}
              alt="useEffect Hook"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-2xl font-semibold text-white mb-3">
              useEffect Hook
            </h3>
            <p className="text-white">
              The `useEffect` hook is used for side effects like fetching data, setting up subscriptions, or manually updating the DOM.
            </p>
          </div>
        </div>
      </div>

      {/* React Ecosystem Section */}
      <div className="p-5">
        <h2 className="text-white font-bold text-3xl text-center mb-5">
          The React Ecosystem
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6  bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={ecosystemImg}
            alt="React Ecosystem"
            className="w-full lg:w-1/2 h-48 object-contain  rounded-lg shadow-2xl mb-3 lg:mb-0  transition-transform hover:scale-105"
          />
          <p className="text-white text-lg text-justify">
            React is complemented by a rich ecosystem of tools and libraries. Popular choices include React Router for navigation, Redux for state management, and Next.js for server-side rendering. These tools make React suitable for a wide range of applications.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 p-5 text-center text-white mt-10">
        <p>React.js Learning Page © 2024</p>
      </footer>
    </div>
  );
};

export default ReactPage;
