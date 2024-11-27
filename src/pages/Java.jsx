import React from "react";
import javaImg from "./../assets/java.png";

const JavaPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={javaImg}
            alt="java"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          The Powerful, Object-Oriented Programming Language
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          Java is a high-level, class-based, object-oriented programming language that is designed to be portable, secure, and robust. It was first released by Sun Microsystems in 1995 and has since become one of the most popular programming languages worldwide. Java is known for its "write once, run anywhere" capability, meaning that Java code can run on any device or platform that has a Java Virtual Machine (JVM).
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of Java:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Object-Oriented Programming
          </li>
          <p>
            Java is based on the principles of object-oriented programming, which promotes modularity, code reuse, and easy maintenance. Key concepts like inheritance, polymorphism, and encapsulation make it a powerful language for building complex applications.
          </p>
          <br />

          <li className="font-semibold text-2xl">Platform Independence</li>
          <p>
            The famous "write once, run anywhere" feature is achieved through the Java Virtual Machine (JVM), which allows Java programs to run on any platform that supports JVM, regardless of the underlying hardware or operating system.
          </p>
          <br />

          <li className="font-semibold text-2xl">Robust and Secure</li>
          <p>
            Java is known for its robustness, with features like automatic garbage collection and exception handling, which minimize errors and improve code reliability. The language also has built-in security features to protect against common vulnerabilities like buffer overflow attacks.
          </p>
          <br />

          <li className="font-semibold text-2xl">Multithreading</li>
          <p>
            Java supports multithreading, allowing programs to perform multiple tasks simultaneously. This feature is especially useful for building applications that require high performance and responsiveness.
          </p>
          <br />

          <li className="font-semibold text-2xl">Rich Standard Library</li>
          <p>
            Java comes with a comprehensive standard library that includes pre-written classes and functions for handling common programming tasks like networking, I/O operations, and data manipulation, which saves time and effort in development.
          </p>
          <br />

          <li className="font-semibold text-2xl">Automatic Memory Management</li>
          <p>
            Java’s garbage collector automatically handles memory allocation and deallocation, reducing the likelihood of memory leaks and making Java applications easier to manage.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Highly portable, thanks to the JVM.</li>
          <li>Object-oriented features enable modular and reusable code.</li>
          <li>Strong security and memory management mechanisms.</li>
          <li>Wide ecosystem with vast libraries, frameworks, and tools.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Slower execution compared to languages like C or C++.</li>
          <li>Requires more memory, especially for resource-heavy applications.</li>
          <li>Verbosity of code may increase compared to more modern languages like Python or JavaScript.</li>
        </ul>
      </div>
    </div>
  );
};

export default JavaPage;
