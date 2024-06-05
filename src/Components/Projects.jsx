import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="border-b border-neutral-800 pb-16">
      <h1 className="my-20 font-bold text-center text-2xl sm:text-3xl lg:text-4xl">
        Projects
      </h1>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-wrap lg:justify-around mb-16">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <img
              className="rounded-lg"
              src={project.image}
              alt="ProjectImage"
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h2 className="text-2xl mb-4">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 py-1 px-2 rounded font-medium bg-neutral-800 text-purple-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
