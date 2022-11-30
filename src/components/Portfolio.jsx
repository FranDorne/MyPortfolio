import React from "react";
import devtoolstech from "../assets/devtoolstech.jpg";
import flybondi from "../assets/flybondi.jpg";
import netflix from "../assets/netflix.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: flybondi,
      demohref: `https://fly-bondi-challenge.vercel.app/`,
      repohref: `https://github.com/FranDorne/flyBondi_Challenge`,
    },
    {
      id: 2,
      src: devtoolstech,
      demohref: `https://devtoolstech-challenge.vercel.app/`,
      repohref: `https://github.com/FranDorne/devtoolstech-challenge`,
    },
    {
      id: 3,
      src: netflix,
      demohref: `https://netflix-clone-3bde2.web.app/`,
      repohref: `https://github.com/FranDorne/netflix-clone`,
    },
    // {
    //   id: 4,
    // },
    // {
    //   id: 5,
    // },
    // {
    //   id: 6,
    // },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demohref, repohref }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demohref} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={repohref} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
