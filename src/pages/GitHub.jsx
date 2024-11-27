import React from "react";
import githubImg from "./../assets/github.png";

const GitHubPage = () => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <div>
        <div className="flex justify-center items-start">
          <img
            src={githubImg}
            alt="github"
            className="rounded-lg h-40 w-100 p-2 pt-10"
          />
        </div>

        <h1 className="text-3xl text-white font-bold flex justify-center items-start">
          A platform for version control and collaboration
        </h1>
        <br />
        <p className="text-white text-semibold m-3">
          GitHub is a web-based platform for version control and collaborative software development. It uses Git, a distributed version control system, to help developers track and manage changes to their code. GitHub is widely used for storing code repositories, managing collaborative projects, and providing a platform for open-source development. It also offers various features like bug tracking, project management, and continuous integration to streamline development workflows.
        </p>

        <h2 className="text-white p-2 font-bold text-3xl">Key Features of GitHub:</h2>

        <ol className="text-white p-5 list-decimal list-inside">
          <li className="font-semibold text-2xl">
            Version Control with Git
          </li>
          <p>
            GitHub allows developers to use Git, a powerful distributed version control system, to track changes in their code, collaborate with others, and manage project history effectively.
          </p>
          <br />

          <li className="font-semibold text-2xl">Collaboration and Teamwork</li>
          <p>
            GitHub simplifies collaboration by allowing multiple developers to work on the same project simultaneously. It offers features like pull requests, code reviews, and merge conflicts management to ensure smooth teamwork.
          </p>
          <br />

          <li className="font-semibold text-2xl">Open-Source Projects</li>
          <p>
            GitHub is the largest platform for open-source software development. Developers can share their projects with the world, contribute to existing open-source repositories, and engage with a global community of developers.
          </p>
          <br />

          <li className="font-semibold text-2xl">Project Management Tools</li>
          <p>
            GitHub provides built-in project management features like GitHub Issues and GitHub Projects, enabling developers to track bugs, tasks, and features within the platform itself.
          </p>
          <br />

          <li className="font-semibold text-2xl">GitHub Actions</li>
          <p>
            GitHub Actions is a powerful feature for automating workflows. It allows you to set up continuous integration (CI) and continuous deployment (CD) pipelines, automating tasks like testing, building, and deploying applications.
          </p>
          <br />

          <li className="font-semibold text-2xl">Security Features</li>
          <p>
            GitHub offers a range of security features, such as Dependabot alerts, which help developers identify and fix vulnerabilities in their code dependencies, and advanced authentication methods for securing accounts.
          </p>
          <br />

          <li className="font-semibold text-2xl">GitHub Pages</li>
          <p>
            GitHub Pages is a feature that allows you to host static websites directly from a GitHub repository, making it easy to create personal websites, project documentation, or blogs.
          </p>
          <br />
        </ol>

        <h2 className="text-white font-bold text-3xl p-3">Advantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Great for collaboration and version control.</li>
          <li>Popular platform for open-source projects and contributions.</li>
          <li>Rich ecosystem of tools and integrations.</li>
          <li>Free hosting for personal projects and websites with GitHub Pages.</li>
        </ul>

        <h2 className="text-white font-bold text-3xl p-3">Disadvantages :</h2>
        <ul className="text-white list-disc list-inside p-5 text-semibold">
          <li>Free accounts have limited private repositories.</li>
          <li>Learning curve for beginners unfamiliar with Git and version control concepts.</li>
          <li>Can become overwhelming with larger projects or many contributors.</li>
        </ul>
      </div>
    </div>
  );
};

export default GitHubPage;
