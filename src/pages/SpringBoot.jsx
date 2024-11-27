import React from "react";
import springBootImg from "./../assets/springboot.png";

const SpringBootPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={springBootImg}
            alt="springboot"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          The Java Framework for Building Enterprise-Grade Applications
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          Spring Boot is an open-source Java-based framework used to create stand-alone, production-grade applications. It is a part of the larger Spring Framework and simplifies the setup and configuration process for Java applications, especially web applications. Spring Boot minimizes the amount of code and configuration needed to get a project up and running, making it one of the most popular frameworks for developing enterprise-level applications.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of Spring Boot:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Auto Configuration
          </li>
          <p>
            Spring Boot automatically configures application settings based on the libraries in use, reducing the need for complex XML configuration files.
          </p>
          <br />

          <li className="font-semibold text-2xl">Embedded Servers</li>
          <p>
            Spring Boot comes with embedded servers like Tomcat, Jetty, or Undertow, eliminating the need for external application servers, and making the deployment process easier.
          </p>
          <br />

          <li className="font-semibold text-2xl">Spring Boot Starter Projects</li>
          <p>
            Spring Boot provides a set of predefined starter templates that come with essential configurations and dependencies, making it easy to set up various types of applications like web apps, REST APIs, or batch applications.
          </p>
          <br />

          <li className="font-semibold text-2xl">Microservices Support</li>
          <p>
            Spring Boot is commonly used to build microservices due to its flexibility, lightweight architecture, and integration with Spring Cloud for managing distributed systems.
          </p>
          <br />

          <li className="font-semibold text-2xl">Production-Ready Features</li>
          <p>
            It provides production-ready features such as health checks, metrics, and application monitoring tools that make managing live applications easier.
          </p>
          <br />

          <li className="font-semibold text-2xl">Easy Testing</li>
          <p>
            Spring Boot makes it easy to test applications using its embedded testing tools, which help automate the testing process for Java applications.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Reduces boilerplate code and complex configurations.</li>
          <li>Quick and easy setup, thanks to embedded servers and auto-configuration.</li>
          <li>Supports a wide variety of enterprise applications, from simple web apps to microservices.</li>
          <li>Provides production-ready features for better application monitoring and management.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Can lead to large application sizes due to auto-configurations and dependencies.</li>
          <li>Initial setup might still be complex for developers new to the Spring ecosystem.</li>
          <li>Less control over application configuration due to auto-configuration settings, which might not fit all use cases.</li>
        </ul>
      </div>
    </div>
  );
};

export default SpringBootPage;
