import React from "react";

export const Portfolio = () => {
  return (
    <div className="p-4">
      <h2 className="font-merriweather text-center text-4xl font-bold mb-6">
        - Mis proyectos -
      </h2>
      <ul className="flex justify-evenly  ">
        <li className="m-auto transform transition duration-400 hover:scale-110">
          <img className="w-72" src="public/Ana y Gabriel.png" alt="" />
        </li>
        <li className="m-auto transform transition duration-400 hover:scale-110">
          <img
            className="w-72"
            src="public/Mujeres de la Escrituras.png"
            alt=""
          />
        </li>
        <li className="m-auto transform transition duration-400 hover:scale-110">
          <img className="w-72" src="public/WorkshopSoftw.png" alt="" />
        </li>
      </ul>
    </div>
  );
};
