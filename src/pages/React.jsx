import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import reactImg from "./../assets/react2.png";
import IntroImg from "./../assets/reactintro.jpg";
import componentImg from "./../assets/components.jpg";
import jsxImg from "./../assets/jsx.webp";
import virtualDomImg from "./../assets/virtual-dom.png";
import advantagesImg from "./../assets/advantages.webp";
import disadvantagesImg from "./../assets/disadvantages.webp";
import lifecycleImg from "./../assets/reactlifecycle.jpg";
import ueffecthooksImg from "./../assets/ueffect.jpg";
import ecosystemImg from "./../assets/ecosystem.png";
import UsestateImg from "./../assets/ustatehook.webp";
import hooksImg from "./../assets/hook.webp"

const ReactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false,     // Trigger animation only once
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 min-h-screen">
      {/* Header Section */}
      <div className="py-10">
        <div className="flex justify-center items-center animate-pulse" data-aos="zoom-in">
          <img
            src={reactImg}
            alt="React Logo"
            className="rounded-lg h-40 w-auto p-2 shadow-2xl transition-transform transform hover:scale-110 hover:rotate-12"
          />
        </div>
        <h1 className="text-4xl text-white font-extrabold text-center mt-5" data-aos="fade-down">
          The Library for Web and Native User Interfaces
        </h1>
        <p className="text-white text-center mt-2 text-lg max-w-3xl mx-auto" data-aos="fade-down" data-aos-delay="200">
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
          data-aos="fade-up"
        />
        <p className="text-white text-lg text-justify max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          React is a JavaScript library developed by Meta (formerly Facebook) for building user interfaces (UIs). It is particularly well-suited for single-page applications, where users can interact with dynamic content without page reloads. React's component-based architecture allows developers to create reusable and scalable UI pieces that work seamlessly together.
        </p>
      </div>

      {/* How React Works Section */}
<div className="p-5 bg-slate-700 rounded-lg shadow-lg mt-10" data-aos="fade-up">
  <h2 className="text-teal-200 font-bold text-3xl text-center mb-5" data-aos="fade-down">
    How React Works
  </h2>
  <p className="text-white text-lg text-justify mb-5" data-aos="fade-right" data-aos-delay="200">
    React uses a declarative paradigm, enabling developers to describe the desired outcome, and React takes care of updating and rendering the UI efficiently. The Virtual DOM minimizes performance costs by only updating the parts of the DOM that have changed, rather than re-rendering the entire UI.
  </p>
  <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="400">
    <img
      src={virtualDomImg}
      alt="How React Works"
      className="w-[80%] rounded-lg shadow-2xl transition-transform hover:scale-105"
    />
  </div>
</div>


      {/* Key Features Section */}
      <div className="p-5">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5" data-aos="fade-right">
          Key Features of React
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards with Images */}
          <div className="bg-slate-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105" data-aos="fade-up">
            <img
              src={componentImg}
              alt="Component-Based Architecture"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-white mb-3" data-aos="zoom-in">
              Component-Based Architecture
            </h3>
            <p className="text-white" data-aos="fade-up" data-aos-delay="600">
              React breaks the UI into independent, reusable components, making code easier to manage and scale.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105" data-aos="fade-up" data-aos-delay="100">
            <img
              src={jsxImg}
              alt="JSX Syntax"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-white mb-3" data-aos="zoom-in">
              JSX (JavaScript XML)
            </h3>
            <p className="text-white" data-aos="fade-up" data-aos-delay="600">
              JSX lets you write HTML-like syntax directly in JavaScript, making code more readable and intuitive.
            </p>
          </div>
          <div className="bg-slate-700 p-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105" data-aos="fade-up" data-aos-delay="200">
            <img
              src={virtualDomImg}
              alt="Virtual DOM"
              className="w-full h-48 object-cover rounded-lg mb-3 transition-all transform hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-white mb-3" data-aos="zoom-in">
              Virtual DOM
            </h3>
            <p className="text-white" data-aos="fade-up" data-aos-delay="600">
              React maintains a lightweight Virtual DOM, ensuring efficient updates and improved performance for complex UIs.
            </p>
          </div>
        </div>
      </div>

      {/* Ecosystem Section */}
      <div className="p-5">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5" data-aos="zoom-in">
          The React Ecosystem
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={ecosystemImg}
            alt="React Ecosystem"
            className="w-full lg:w-1/2 h-48 object-contain rounded-lg shadow-2xl mb-3 lg:mb-0 transition-transform hover:scale-105"
            data-aos="zoom-in"
          />
          <p className="text-white text-lg text-justify" data-aos="fade-right" data-aos-delay="200">
            The React ecosystem is vast and ever-growing. Tools like Redux for state management, React Router for navigation, and Next.js for server-side rendering expand React’s capabilities, making it a powerful solution for building complex applications.
          </p>
        </div>
      </div>


      
      {/* React Components */}
      <div className="relative p-5 space-y-10" data-aos="fade-up">
        <h2 className="text-teal-300 font-bold text-3xl text-center">
          Understanding React Components
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray-800 rounded-lg shadow-lg p-6"data-aos="fade-right" 
      data-aos-delay="400">
          <div className="flex-1">
            <img
              src={componentImg}
              alt="React Components"
              className="w-full h-48 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 text-gray-200 space-y-3">
            <h3 className="text-teal-200 text-2xl font-bold">Functional Components</h3>
            <p>
              Functional components are JavaScript functions that return JSX. They are simple and ideal for most use cases. React hooks, like `useState` and `useEffect`, allow you to add state and lifecycle methods to functional components.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 bg-gray-800 rounded-lg shadow-lg p-6" data-aos="fade-left" 
      data-aos-delay="400">
          <div className="flex-1">
            <img
              src={hooksImg}
              alt="React Hooks"
              className="w-full h-48 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 text-gray-200 space-y-3" >
            <h3 className= "text-teal-200 text-2xl font-bold">React Hooks</h3>
            <p>
              React introduced hooks to allow state and lifecycle management in functional components. Hooks like `useState`, `useEffect`, and `useContext` allow functional components to behave like class components but with less complexity.
            </p>
          </div>
        </div>
      </div>

      {/* React Hooks Section */}
<div className="p-5" data-aos="fade-up">
  <h2 
    className="text-teal-200 font-bold text-3xl text-center mb-5" 
    data-aos="fade-down"
  >
    Types Of React Hooks
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* useState Hook */}
    <div 
      className="bg-slate-700 p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105" 
      data-aos="fade-right" 
      data-aos-delay="400"
    >
      <img
        src={UsestateImg}
        alt="useState Hook"
        className="w-full h-48 object-contain rounded-lg mb-3"
        data-aos="zoom-in"
      />
      <h3 className="text-teal-200 font-bold text-3xl text-center mb-5" data-aos="fade-left">
        useState Hook
      </h3>
      <p className="text-white" data-aos="fade-up">
        The useState hook allows you to add state to functional components. It returns a state variable and a function to update it.
      </p>
    </div>

    {/* useEffect Hook */}
    <div 
      className="bg-slate-700 p-6 rounded-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105" 
      data-aos="fade-left" 
      data-aos-delay="200"
    >
      <img
        src={ueffecthooksImg}
        alt="useEffect Hook"
        className="w-full h-48 object-contain rounded-lg mb-3"
        data-aos="zoom-in"
        data-aos-delay="600"
      />
      <h3 className="text-teal-200 font-bold text-3xl text-center mb-5" data-aos="fade-right">
        useEffect Hook
      </h3>
      <p className="text-white" data-aos="fade-up" data-aos-delay="400">
        The useEffect hook is used for side effects like fetching data, setting up subscriptions, or manually updating the DOM.
      </p>
    </div>
  </div>
</div>


      {/* Lifecycle Methods Section */}
      <div className="p-5" data-aos="fade-right">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5">
          React Lifecycle Methods
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={lifecycleImg}
            alt="React Lifecycle Methods"
            className="w-full lg:w-1/2 h-48 object-contain rounded-lg shadow-2xl mb-3 lg:mb-0 transition-transform hover:scale-105"
          />
          <p className="text-white text-lg text-justify" data-aos="fade-right" data-aos-delay="200">
            React components have a lifecycle with distinct phases: Mounting, Updating, and Unmounting. Lifecycle methods like `componentDidMount` and `componentDidUpdate` allow developers to control component behavior during these phases.
          </p>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="p-5">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5" data-aos="zoom-in">
          Advantages of React
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={advantagesImg}
            alt="Advantages"
            className="w-full lg:w-1/2 h-48 object-contain rounded-lg shadow-2xl mb-3 lg:mb-0 transition-transform hover:scale-105"  data-aos="zoom-in"
          />
          <ul className="text-white list-disc list-inside p-5" data-aos="fade-up" data-aos-delay="400">
            <li>High performance due to Virtual DOM.</li>
            <li>Reusable components improve development speed and consistency.</li>
            <li>Strong community support with extensive documentation.</li>
            <li>Seamless integration with other JavaScript libraries and frameworks.</li>
          </ul>
        </div>
      </div>

      {/* Disadvantages Section */}
      <div className="p-5">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5" data-aos="zoom-in">
          Disadvantages of React
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 bg-slate-700 rounded-lg shadow-lg p-6">
          <img
            src={disadvantagesImg}
            alt="Disadvantages"
            className="w-full lg:w-1/2 h-48 object-contain rounded-lg shadow-2xl mb-3 lg:mb-0 transition-transform hover:scale-105"  data-aos="zoom-in"
          />
          <ul className="text-white list-disc list-inside p-5" data-aos="fade-down" data-aos-delay="400">
            <li>Steep learning curve for beginners.</li>
            <li>Only handles the view layer; requires additional tools for full-stack solutions.</li>
            <li>Frequent updates can sometimes introduce breaking changes.</li>
          </ul>
        </div>
      </div>


      {/* React State Management */}
      <div className="p-5 rounded-lg shadow-lg mt-10" data-aos="zoom-in-down">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5">
          State Management in React
        </h2>
        <p className="text-gray-200 text-lg text-center max-w-3xl mx-auto">
          React's state management system allows you to manage dynamic data and keep your UI in sync with the data model. In larger applications, you may need to manage global state, which can be done using Context API or state management libraries like Redux or Zustand.
        </p>
      </div>

      {/* React Best Practices */}
      <div className="p-5 rounded-lg shadow-lg mt-10" data-aos="fade-down" data-aos-delay="400">
        <h2 className="text-teal-200 font-bold text-3xl text-center mb-5">
          Best Practices in React Development
        </h2>
        <div className="space-y-4">
          <ul className="text-gray-300 list-disc list-inside p-5 space-y-3" data-aos="zoom-in-down"  data-aos-delay="400">
            <li>Always use functional components and hooks over class components for simplicity.</li>
            <li>Break your app into reusable components to improve maintainability.</li>
            <li>Keep state management localized to where it's needed, and avoid unnecessary global state unless required.</li>
            <li>Optimize performance with `React.memo` and `useMemo` when rendering large lists or complex UI elements.</li>
            <li>Use PropTypes to enforce type checking and avoid runtime errors in development.</li>
          </ul>
        </div>
      </div>

      {/* Conclusion */}
      <div className="p-5  rounded-lg shadow-lg mt-10">
        <h2 className="text-green-300 font-bold text-3xl text-center mb-5" data-aos="fade-down" data-aos-delay="400">
          Conclusion
        </h2>
        <p className="text-gray-200 text-lg text-center max-w-3xl mx-auto" data-aos="zoom-in-down"  data-aos-delay="400">
          React.js is an incredibly powerful and flexible library for building modern, interactive UIs. With its component-based architecture and hooks, React allows developers to create maintainable, high-performance applications. By following best practices and utilizing tools like AOS, you can enhance your development experience and build engaging user interfaces.
        </p>
      </div>


       {/* Footer */}
       <footer className="bg-slate-900 p-5 text-center text-white mt-10">
        <p>React.js Learning Page © 2024</p>
      </footer>
    </div>
  );
};

export default ReactPage;

