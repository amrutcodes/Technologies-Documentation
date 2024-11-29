import React from "react";
import reactImg from "./../assets/react2.png";
import expressImg from "./../assets/expressjs.png";
import nodeImg from "./../assets/nodejs.svg";
import feature from "./../assets/feature.svg";
import githubImg from "./../assets/github.png";
import mongoImg from "./../assets/mongodb.png";
import javaImg from "./../assets/java.png";
import springImg from "./../assets/springboot.png";
import jsImg from "./../assets/javascript.png";
import postmanImg from "./../assets/postman.png";
import TechCard from "../component/TechCard";
import { Link } from "react-router-dom";

const Home = () => {
  const technologies = [
    {
      name: "React JS",
      image: reactImg,
      desc: "React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development.",
      route:"/React"
    },

    {
      name: "Express JS",
      image: expressImg,
      desc: "Express.js is a minimalistic and flexible web application framework for Node.js, ideal for building APIs and server-side applications.",
    route:"/ExpressJs"
    },
    {
      name: "Node JS",
      image: nodeImg,
      desc: "Node.js is a runtime environment for server-side JavaScript, enabling high-performance and scalable backend development.",
    },
    {
      name: "Tailwind CSS",
      image: feature,
      desc: "Tailwind CSS is a utility-first framework for designing custom interfaces quickly and efficiently.",
    },
    {
      name: "GitHub",
      image: githubImg,
      desc: "GitHub is a platform for version control and collaboration, widely used for open-source and software development.",
    },
    {
      name: "MongoDB",
      image: mongoImg,
      desc: "MongoDB is a flexible, NoSQL database system, perfect for modern applications with dynamic data structures.",
    },
    {
      name: "Java",
      image: javaImg,
      desc: "Java is a versatile, object-oriented programming language known for its platform independence and robust ecosystem.",
    },
    {
      name: "Spring Boot",
      image: springImg,
      desc: "Spring Boot simplifies Java application development with minimal configuration, ideal for RESTful APIs and microservices.",
    },
    {
      name: "JavaScript",
      image: jsImg,
      desc: "JavaScript is a versatile programming language, essential for web development, capable of creating interactive web applications.",
    },
    {
      name: "Postman",
      image: postmanImg,
      desc: "Postman is a tool for testing APIs, enabling developers to streamline development and testing workflows efficiently.",
    },
  ];

  return (



    
    <div className="bg-gradient-to-b from-gray-900 via-black to-teal-900 text-white min-h-screen p-10">
      
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-teal-300 mb-4">
          <i>Discover the Best Technologies to Learn</i>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Dive into the world of modern web development, from React to Node.js
          and beyond. Equip yourself with the tools you need to stay ahead.
        </p>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
         <Link to={tech.route || "#"} key={index}>
          <TechCard
            key={index}
            name={tech.name}
            image={tech.image}
            desc={tech.desc}
          
          />
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-black text-gray-500 py-6 mt-12">
        <p className="text-center text-sm">
          &copy; 2024 YourWebsite. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
