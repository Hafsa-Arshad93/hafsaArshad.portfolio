import React from "react";
import "./Work.css";

// Example imports - replace with your actual project images
// import reactProject1 from "../../assets/Work/react1.png";
// import reactProject2 from "../../assets/Work/react2.png";
// import htmlProject1 from "../../assets/Work/html1.png";
// import bootstrapProject from "../../assets/Work/bootstrap1.png";
// import portfolioProject from "../../assets/Work/portfolio.png";

function Work() {
  return (
    <section className="work-section px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {/* Section 1: React + Tailwind */}
      <div className="section mb-12">
        <h3 className="text-2xl font-semibold mb-6">React + Tailwind Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* <ProjectCard title="React Project 1" img={reactProject1} link="/projects/react1" />
          <ProjectCard title="React Project 2" img={reactProject2} link="/projects/react2" /> */}
        </div>
      </div>

      {/* Section 2: HTML/CSS/JS */}
      <div className="section mb-12">
        <h3 className="text-2xl font-semibold mb-6">HTML/CSS/JS Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* <ProjectCard title="HTML Project 1" img={htmlProject1} link="/projects/html1" /> */}
        </div>
      </div>

      {/* Section 3: Bootstrap + Portfolio */}
      <div className="section mb-12">
        <h3 className="text-2xl font-semibold mb-6">Bootstrap & Portfolio</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* <ProjectCard title="Bootstrap Project" img={bootstrapProject} link="/projects/bootstrap1" />
          <ProjectCard title="This Portfolio" img={portfolioProject} link="/portfolio" /> */}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, img, link }) {
  return (
    <div className="project-card border rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <a
          href={link}
          className="inline-block mt-3 bg-yellow-300 px-4 py-2 rounded-full text-black hover:bg-yellow-400 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default Work;
