import React, { useState } from "react";
import img1 from"../assets/images/img1.jpg"
import img2 from"../assets/images/img2.jpg"
import img3 from"../assets/images/img3.jpg"
import img4 from"../assets/images/img4.jpg"
import img5 from"../assets/images/img5.webp"
import img6 from"../assets/images/img6.jpg"

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Pizza Store",
      description: "HTML,CSS & Javascript",
      img: img1,
      
     
    },
    {
      id: 2,
      title: "Weather App",
      description: "HTML,CSS & Javascript",
      img: img2,
      link:"https://harshita28m.github.io/TAI-IP-Weather-App/"
      
    },
    {
      id: 3,
      title: "Gallery Filter",
      description: "HTML,CSS & Javascript",
      img: img3,
      link:"https://harshita28m.github.io/TAI-IP-Gallery-Filter/"
    },
    {
      id: 4,
      title: "Calculator",
      description: "React & TailwindCSS",
      img: img4,
      link:"https://calculator-sooty-two.vercel.app/"
    },
    {
      id: 5,
      title: "Shopping App",
      description: "React & TailwindCSS",
      img: img5,
    },
    {
      id: 6,
      title: "Note Taking App",
      description: "MERN",
      img: img6,
    },
    
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-20  ">
        <h1 className="text-center text-4xl font-bold">Projects</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191] text-xl mt-4">
        "Innovative digital creations showcasing expertise and creativity."
        </p>
        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        
        
      </div>
    </>
  );
}

export default Projects;
