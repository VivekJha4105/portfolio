import about from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <section className="border-b border-neutral-800 pb-6">
      <h2 className="py-20 text-white font-semibold text-center text-2xl sm:text-3xl lg:text-4xl">
        About
        <span className="text-slate-400"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className=" rounded-2xl" src={about} alt="aboutPic" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center lg:justify-start">
            <p className="max-w-xl py-2 my-2">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
