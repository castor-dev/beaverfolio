
  import React from 'react';
  import cv from './cv.json';

  const Hero = () => (
    <section className="hero">
      <h1>{cv.name}</h1>
      <h2>{cv.title}</h2>
      <p>{cv.tagline}</p>
      <div className="contact">
        <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a> |{' '}
        <a href={cv.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
        <a href={cv.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );

  const Experience = () => (
    <section className="experience">
      <h3>Experience</h3>
      {cv.experience.map((job, index) => (
        <div key={index} className="job">
          <h4>{job.position} @ {job.company}</h4>
          <p className="dates">{job.start} - {job.end}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );

  const Education = () => (
    <section className="education">
      <h3>Education</h3>
      {cv.education.map((edu, index) => (
        <div key={index} className="edu">
          <h4>{edu.degree} - {edu.institution}</h4>
          <p className="dates">{edu.start} - {edu.end}</p>
          <p>{edu.description}</p>
        </div>
      ))}
    </section>
  );

  const Skills = () => (
    <section className="skills">
      <h3>Skills</h3>
      <ul>
        {cv.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );

  const Projects = () => (
    <section className="projects">
      <h3>Projects</h3>
      {cv.projects.map((project, index) => (
        <div key={index} className="project">
          <h4>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </h4>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );

  const Footer = () => (
    <footer>
      <p>© {new Date().getFullYear()} {cv.name}. All rights reserved.</p>
    </footer>
  );

  export default function App() {
    return (
      <div className="app">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
