import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="border-b border-neutral-800 pb-16">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="my-20 font-bold text-center text-2xl sm:text-3xl lg:text-4xl"
      >
        Projects
      </motion.h1>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-wrap lg:justify-around mb-16">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full lg:w-1/4 mb-4 lg:mb-0"
          >
            <img
              className="rounded-lg"
              src={project.image}
              alt="ProjectImage"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h2 className="text-2xl mb-4">{project.title}</h2>
            <p className="text-lg mb-4 text-white">{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="mr-2 py-1 px-2 rounded font-medium bg-neutral-800 text-purple-400"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
