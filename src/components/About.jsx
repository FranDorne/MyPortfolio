import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a front end developer who has worked in multiple technologies
          both in a working and practical way to add knowledge. I also have
          experience on UX/UI which makes me always develop with a user-oriented
          thinking and makes it easy for me to communicate when working in a
          team with other people. I am currently looking for new opportunities
          that allow me to apply value with my knowledge and to be able to
          continue my professional development by challenging myself to new
          experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
