import React from "react";
import reactImg from "./../assets/react2.png"
import expressImg from "./../assets/expressjs.png"
import nodeImg from "./../assets/nodejs.svg"
import tailwindImg from "./../assets/tailwind.svg"
import githubImg from "./../assets/github.png"
import mongoImg from "./../assets/mongodb.png"
import javaImg from "./../assets/java.png"
import springImg from "./../assets/springboot.png"
import jsImg from "./../assets/javascript.png"
import postmanImg from "./../assets/postman.png"
import TechCard from "../component/TechCard";

const Home = () => {

    const technologies=[
        {
            name:"React JS",
            image:reactImg,
            desc:"React can be used to build web, mobile, and desktop applications, making it a versatile framework for cross-platform development. React Native, a framework based on React is specifically designed for mobile app development, while React Desktop allows you to create desktop applications using web technologies."
        },

        {
            name:"Express JS",
            image:expressImg,
            desc:"Express.js is a minimalistic and flexible web application framework for Node.js. It provides robust features for building web and mobile applications, making it a popular choice among developers for creating APIs and server-side applications."
        },

        {
          name:"Node JS",
          image:nodeImg,
          desc:"Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code on the server side. Unlike traditional JavaScript, which runs in the browser, Node.js extends the capabilities of JavaScript to the backend, enabling the creation of scalable, high-performance server-side applications."

        },

        {
          name:"Tailwind Css",
          image:tailwindImg,
          desc:"Tailwind CSS is a utility-first CSS framework that provides a robust and flexible way to style web applications directly within your HTML or JSX. Unlike traditional CSS frameworks, which rely on pre-designed components (like Bootstrap), Tailwind offers a set of low-level utility classes, enabling developers to create custom designs without writing CSS from scratch."
        },

        {
          name:"Github",
          image:githubImg,
          desc:"GitHub is a cloud-based platform for version control and collaboration, enabling developers to store, manage, track, and collaborate on projects. It is built on Git, a distributed version control system, and provides a user-friendly interface to manage repositories and workflows. GitHub is widely used for software development, open-source projects, and version management."
        },

        {
        name:"Mongo DB",
        image:mongoImg,
        desc:"MongoDB is a NoSQL database system designed to store, query, and manage large volumes of data in a flexible, high-performance, and scalable way. Unlike traditional relational databases, MongoDB uses a document-oriented data model, storing data in JSON-like documents called BSON (Binary JSON). This structure allows for dynamic, schema-less data storage, making it ideal for modern applications with changing requirements."
        },

        {
          name:"Java",
          image:javaImg,
          desc:"Java is a versatile, high-level, object-oriented programming language designed to enable developers to write code that can run on any platform. Created by James Gosling and developed by Sun Microsystems in 1995 (later acquired by Oracle), Java is known for its “Write Once, Run Anywhere” philosophy, achieved through the Java Virtual Machine (JVM)."
        },

        {
          name:" Spring Boot",
          image: springImg,
          desc:"Spring Boot is a Java-based framework used for building standalone, production-ready applications quickly and with minimal configuration. It is built on top of the Spring Framework and simplifies the development of Spring applications by providing opinionated defaults, auto-configuration, and a streamlined setup process. This makes Spring Boot ideal for modern application development, particularly for microservices and RESTful APIs."
        },

        {
          name:"Javascript",
          image:jsImg,
          desc:"JavaScript is a high-level, versatile programming language that is a cornerstone of modern web development. It was originally created in 1995 by Brendan Eich at Netscape to make web pages interactive. Over the years, JavaScript has evolved to become a full-fledged language capable of building dynamic web applications, server-side applications, and even mobile and desktop apps."
        },

        {
          name:"Postman",
          image:postmanImg,
          desc:"Postman is a powerful API (Application Programming Interface) testing and development tool used by developers to build, test, and manage APIs. It provides a user-friendly interface for sending requests to an API and analyzing the responses, which makes it an essential tool for both back-end and front-end development."
        },

    ]



  return (

    
    <div className="bg-cover bg-center relative text-white p-10 bg-slate-800">
      <h1 className="text-5xl font-extrabold text-center mb-4">
        <i>Discover the Best Technologies to Learn </i>
      </h1>
      <p className="text-xl text-center max-w-2xl mx-auto">
    Dive into the world of modern web development, from React to Node.js and beyond. Equip yourself with the tools you need to stay ahead.
  </p>




      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
{technologies.map((tech,index)=>{

    return(
        <TechCard
        name={tech.name}
        image={tech.image}
        desc={tech.desc} />
    )
})}




      </div>
      <footer className="bg-slate-800 text-white py-6 mt-8">
  <p className="text-center text-sm mt-4">&copy; 2024 YourWebsite. All rights reserved.</p>
</footer>

    </div>
  );
};




export default Home;
