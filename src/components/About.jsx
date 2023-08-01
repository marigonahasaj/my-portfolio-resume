import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about md:pl-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        My name is Marigona.  <br /> <br /> I am a mid Senior front end developer, designing, building and maintaining responsive webs and apps for over three years. Coming to the coding universe from a 7 year retail industry management experience, I gained proficiency in developing Enterprise Resource Development software. Customizing elements of the ERP software system, adjusting the user interface and usability, and updating the best practices guidelines.
        </p>

        <br />

        <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life.  <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.<br /> <br /> Eager to tackle more complex problems and continue to maximise user efficiency and experience, I shared work with product teams from concept to launch.
        </p>
      </div>
    </div>
  );
};

export default About;
