import { useState, useRef } from "react";
import Modal from "./Modal";
import { projects } from "../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const cardsContainerRef = useRef(null);

  const projectCategories = [
    {
      title: "Workflow Automations",
      description:
        "Streamlining processes and enhancing productivity through intelligent automation solutions.",
      projects: projects.workflowAutomations || [],
    },
    {
      title: "AI & Chatbots",
      description:
        "Leveraging artificial intelligence to create intelligent conversational interfaces.",
      projects: projects.aiChatbots || [],
    },
    {
      title: "Web Applications",
      description:
        "Web applications built with modern technologies and best practices.",
      projects: projects.fullstackProjects || [],
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-gradient-dark bg-grid relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading">
            Delivering Excellence
            <br />
            Through Innovative Solutions
          </h2>
          <p className="subheading mx-auto">
            Let me transform your ideas into reality. Each project showcases my
            commitment to delivering high-quality solutions that drive real
            business value and exceed client expectations.
          </p>
        </div>

        <div className="space-y-32" ref={cardsContainerRef}>
          {projectCategories.map((category) => (
            <div key={category.title} className="space-y-12">
              <div className="text-center">
                <h3 className="section-title mb-4">{category.title}</h3>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.projects.map((project) => (
                  <div
                    key={project.title}
                    className="project-card group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-white">
                        {project.title}
                      </h4>
                      <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="bg-accent/10 text-accent-light px-3 py-1 rounded-full text-xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="p-6">
            <div className="mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              {selectedProject.content.split("\n").map((line, idx) => (
                <p key={idx} className="text-neutral-400 mb-3">
                  {line}
                </p>
              ))}

              <div className="flex flex-wrap gap-4">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent hover:bg-accent-light text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    View Live
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/10">
              {selectedProject.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-accent/10 text-accent-light px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
