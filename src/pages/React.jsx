import React from "react";
import reactImg from "./../assets/react2.png";

const ReactPage = () => {
  return (
    <div className=" bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img src={reactImg} alt="react" className="  rounded-lg h-40 w-100 p-2 pt-10" />
        </div>

      <h1 className=" text-3xl text-white font-bold flex justify-center items-start"> The library for web and native user interfaces</h1>
<br/>
        <p className="text-white text-semibold m-3">
          React is a JavaScript library developed by Meta (formerly Facebook)
          for building user interfaces (UIs), especially for single-page
          applications. It is widely used for creating dynamic, responsive, and
          reusable UI components.
          React is a popular JavaScript library for building dynamic and interactive user interfaces. Developed by Meta (formerly Facebook) in 2013, it has since become one of the most widely used tools for front-end development. React is particularly well-suited for creating single-page applications (SPAs), where users can interact with the interface without needing to reload the page. The library is built around a component-based architecture, enabling developers to break the UI into reusable pieces, which not only simplifies development but also ensures consistency across the application.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of React:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Component-Based Architecture
          </li>
          <p>
            React breaks the UI into independent, reusable components, making
            code easier to manage and scale.
          </p>
          <br />

          <li className="font-semibold text-2xl">Declarative Syntax</li>
          <p>
            React uses a declarative programming style, where you describe what
            you want the UI to look like, and React takes care of rendering the
            UI efficiently.
          </p>
          <br />

          <li className="font-semibold text-2xl">Virtual DOM</li>
          <p>
            Instead of directly manipulating the real DOM, React maintains a
            lightweight copy called the Virtual DOM. Changes are computed here
            first and efficiently updated in the real DOM, ensuring better
            performance.
          </p>
          <br />

          <li className="font-semibold text-2xl">JSX (JavaScript XML)</li>
          <p>
            JSX is a syntax extension that lets you write HTML-like code
            directly within JavaScript. It makes the code more readable and
            easier to write.
          </p>
          <br />

          <li className="font-semibold text-2xl">One-Way Data Binding</li>
          <p>
            React employs unidirectional data flow, which makes debugging and
            managing data easier. The data flows from parent components to child
            components.
          </p>
          <br />

          <li className="font-semibold text-2xl">State and Props</li>
          <ul className="list-disc list-inside p-4 text-white text-semibold">
            <li>State: Represents a component's local, changeable data.</li>
            <li>
              Props: Short for properties, they are used to pass data from parent
              to child components.
            </li>
          </ul>
          <br />

          <li className="font-semibold text-2xl">
            Extensive Ecosystem and Community
          </li>
          <p>
            React has a vast ecosystem with tools like React Router for
            navigation, Redux for state management, and many third-party
            libraries.
          </p>
          <br />

          <li className="font-semibold text-2xl">React Native Integration</li>
          <p>
            React concepts can also be extended to mobile app development using
            React Native, allowing for cross-platform apps.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>High performance due to Virtual DOM.</li>
          <li>Reusable components improve development speed.</li>
          <li>Strong community support and vast documentation.</li>
          <li>Seamless integration with other JavaScript libraries.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Steep learning curve for beginners.</li>
          <li>
            Only handles the view layer of applications (requires additional
            tools for full-stack solutions).
          </li>
          <li>Frequent updates can introduce breaking changes.</li>
        </ul>
      </div>
    </div>
  );
};

export default ReactPage;
