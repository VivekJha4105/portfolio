import { HERO_CONTENT } from "../constants";
import profile from "../assets/Profile.png";

const Hero = () => {
  return (
    <section className="border-b border-neutral-800 pb-6 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Vivek Jha
            </h1>
            <span className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-2xl sm:text-4xl text-transparent">
              Software Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-thin tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-8">
          <div className="flex justify-center">
            <img src={profile} alt="ProfilePic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
