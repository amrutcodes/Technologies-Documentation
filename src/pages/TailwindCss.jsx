import React from "react";
import tailwindImg from "./../assets/tailwind.svg";

const TailwindPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={tailwindImg}
            alt="tailwind"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          A utility-first CSS framework for rapid UI development
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          Tailwind CSS is a utility-first CSS framework that provides low-level utility
          classes to build custom designs without writing custom CSS. It's designed to be
          highly customizable and allows developers to rapidly build responsive and modern
          UIs directly in their HTML.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of Tailwind CSS:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Utility-First Approach
          </li>
          <p>
            Tailwind provides a set of utility classes that you can directly apply to
            HTML elements to style them. This eliminates the need to write custom CSS for
            each element and speeds up development.
          </p>
          <br />

          <li className="font-semibold text-2xl">Highly Customizable</li>
          <p>
            Tailwind is extremely customizable. You can configure colors, spacing, typography,
            and more by editing the Tailwind configuration file, allowing you to create a unique
            design system.
          </p>
          <br />

          <li className="font-semibold text-2xl">Responsive Design</li>
          <p>
            Tailwind includes built-in responsive utilities, enabling developers to create
            mobile-first, responsive layouts easily without writing custom media queries.
          </p>
          <br />

          <li className="font-semibold text-2xl">Component-Friendly</li>
          <p>
            While Tailwind is utility-first, it also works well with component-based frameworks
            like React, Vue, and Angular, allowing for easy integration with modern web frameworks.
          </p>
          <br />

          <li className="font-semibold text-2xl">Small File Size (with PurgeCSS)</li>
          <p>
            Tailwind's file size is small by default, but it can be further reduced using PurgeCSS,
            which removes unused styles from your final CSS file.
          </p>
          <br />

          <li className="font-semibold text-2xl">
            Extensive Documentation
          </li>
          <p>
            Tailwind CSS has comprehensive and well-organized documentation, making it easy to learn
            and get started with.
          </p>
          <br />

          <li className="font-semibold text-2xl">Design Consistency</li>
          <p>
            With Tailwind, it's easy to maintain design consistency throughout an application, as
            you can rely on utility classes to standardize spacing, colors, typography, and other design aspects.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Rapid development with utility classes.</li>
          <li>Highly customizable to match your design system.</li>
          <li>Easy to integrate with modern JavaScript frameworks like React and Vue.</li>
          <li>Reduces the need to write custom CSS.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Can result in cluttered HTML code with many utility classes.</li>
          <li>Requires a learning curve to understand the utility-first approach.</li>
          <li>Customization can take time, especially for developers unfamiliar with the configuration file.</li>
        </ul>
      </div>
    </div>
  );
};

export default TailwindPage;
