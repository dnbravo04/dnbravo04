import React from "react";
import project1 from "/Ana y Gabriel.png";
import project2 from "/Mujeres de la Escrituras.png";
import project3 from "/WorkshopSoftw.png";
export const Portfolio = () => {
  return (
    <div className="p-4">
      <h2 className="font-merriweather text-center text-4xl font-bold mb-6">
        - Mis proyectos -
      </h2>
      <ul className="flex justify-evenly  ">
        <li className="m-auto transform transition duration-400 hover:scale-110">
          <a href="https://github.com/dnbravo04/anaygabriel">
            <img className="w-72" src={project1} alt="" />
          </a>
        </li>
        <li className="m-auto transform transition duration-400 hover:scale-110">
          <a href="https://github.com/dnbravo04/mujeres-escrituras">
            <img className="w-72" src={project2} alt="" />
          </a>
        </li>
        <li className="m-auto transform transition duration-400 hover:scale-110">
          <a href="https://github.com/dnbravo04/workshopsoftware">
            <img className="w-72" src={project3} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
