import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { RiNodejsLine, RiReactjsLine } from "react-icons/ri";
import { SiDocker, SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <section className="border-b border-neutral-800 pb-16">
      <h1 className="my-20 text-center font-bold text-2xl sm:text-3xl lg:text-4xl">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-xl p-4 border-4 border-neutral-700">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-xl p-4 border-4 border-neutral-700">
          <RiNodejsLine className="text-7xl text-green-600" />
        </div>
        <div className="rounded-xl p-4 border-4 border-neutral-700">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-xl p-4 border-4 border-neutral-700">
          <DiRedis className="text-7xl text-red-500" />
        </div>
        <div className="rounded-xl p-4 border-4 border-neutral-700">
          <SiDocker className="text-7xl text-sky-500" />
        </div>
        <div className="rounded-xl p-4 border-4 border-neutral-700">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
