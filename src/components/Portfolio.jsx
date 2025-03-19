import React from "react";
import siu from "../assets/portfolio/siu.png";
import mvc from "../assets/portfolio/mvc.png";
import dashcodeadmin from "../assets/portfolio/dashcodeadmin.png";
import simonbrandt from "../assets/portfolio/simonbrandt.png";
import geotech from "../assets/portfolio/geotech.png";
import startup from "../assets/portfolio/startup.png";
import bmw from "../assets/portfolio/bmw.png";
import landingpg from "../assets/portfolio/landingpg.png";
import geocad from "../assets/portfolio/geocad.png";
import scriptix from "../assets/portfolio/scriptix.png";
import lenura from "../assets/portfolio/lenura.nl.png";
import erp from "../assets/portfolio/erp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: scriptix,
      link: 'https://scriptix.app/login',
    },
    {
      id: 2,
      src: erp,
      link: 'https://one.uropenn.se/login',
    },   {
      id: 3,
      src: siu,
      link: 'https://siu.rks-gov.net/',
    },
    {
      id: 4,
      src: mvc,
      link: 'https://store.myvirtualcart.com/',
    },
    {
      id: 5,
      src: geotech,
      link: 'https://www.geotech.al/',
    },
    {
      id: 6,
      src: lenura,
      link: 'https://www.lenura.nl/',
    },
    {
      id: 7,
      src: geocad,
      link: 'https://geocad-ks.com/about',
    },
    {
      id: 8,
      src: simonbrandt,
      link: 'https://simonbrandt.ch/',
    },
    {
      id: 9,
      src: dashcodeadmin,
      link: 'https://dashcode.codeshaper.net/app/home',
    },
    {
      id: 10,
      src: startup,
      link: 'https://startup-saas-modern.vercel.app/',
    },
    {
      id: 11,
      src: bmw,
      link: 'https://www.bmw.de/de/home.html',
    },
    {
      id: 12,
      src: landingpg,
      link: 'https://startup-online-course.vercel.app/',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-screen portfolio md:pl-12 md:mt-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg" style={{maxHeight:'235px'}}>
              <img
                src={src}
                alt="projects"
                style={{maxHeight:'200px', minWidth:'100%', objectFit:'cover'}}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-1 text-xl lg:m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
