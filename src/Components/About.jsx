import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="border-b border-neutral-800 pb-6">
      <h2 className="py-20 text-white font-semibold text-center text-2xl sm:text-3xl lg:text-4xl">
        About
        <span className="text-slate-400"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className=" rounded-2xl" src={about} alt="aboutPic" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center lg:justify-start">
            <p className="max-w-xl py-2 my-2 text-lg text-white">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
