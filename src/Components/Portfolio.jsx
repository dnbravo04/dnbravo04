import React from "react";

export const Portfolio = () => {
  return (
    <div className="pt-6">
      <h2 className="font-merriweather text-center text-4xl font-bold mb-6">
        - My projects - 
      </h2>
      <ul className="flex justify-evenly ">
        <li className="m-auto">
          <img
            className="w-80 transform transition duration-400 hover:scale-110"
            src="public/Ana y Gabriel.png"
            alt=""
          />
        </li>
        <li className="m-auto">
          <img
            className="w-80 transform transition duration-400 hover:scale-110"
            src="public/Mujeres de la Escrituras.png"
            alt=""
          />
        </li>
        <li className="m-auto">
          <img
            className="w-80 transform transition duration-400 hover:scale-110"
            src="public/WorkshopSoftw.png"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};
