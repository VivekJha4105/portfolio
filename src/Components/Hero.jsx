import { HERO_CONTENT } from "../constants";
import profile from "../assets/Profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-800 pb-16 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Vivek Jha
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-2xl sm:text-4xl text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-lg text-white font-thin tracking-tight"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              src={profile}
              alt="ProfilePic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
