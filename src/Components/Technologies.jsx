import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiDocker, SiMongodb } from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <motion.section
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="border-b border-neutral-800 pb-16"
    >
      <h1 className="my-20 text-center font-bold text-2xl sm:text-3xl lg:text-4xl">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl p-4 border-4 border-neutral-700"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-xl p-4 border-4 border-neutral-700"
        >
          <RiNodejsLine className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="rounded-xl p-4 border-4 border-neutral-700"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-xl p-4 border-4 border-neutral-700"
        >
          <DiRedis className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.7)}
          initial="initial"
          animate="animate"
          className="rounded-xl p-4 border-4 border-neutral-700"
        >
          <SiDocker className="text-7xl text-sky-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-xl p-4 border-4 border-neutral-700"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Technologies;
