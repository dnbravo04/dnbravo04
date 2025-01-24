import React from "react";
import Polaroid from "./MiniComponents/Polaroid";
import imagen1 from "/imagen1.jpg";
import imagen2 from "/imagen2.jpg";
import imagen3 from "/imagen3.jpg";
import imagen4 from "/imagen4.jpg";

export const AboutMe = () => {
  return (
    <div className="px-4 flex items-center justify-center">
      <div className="w-[calc(100vw-1cm)] grid grid-cols-2 gap-4">
        <div className="justify-self-end">
          <Polaroid image={imagen1} altText="Descripción 1" caption="Foto 1" />
        </div>
        <Polaroid image={imagen2} altText="Descripción 2" caption="Foto 2" />
        <div className="justify-self-end">
          <Polaroid image={imagen3} altText="Descripción 3" caption="Foto 3" />
        </div>
        <Polaroid image={imagen4} altText="Descripción 4" caption="Foto 4" />
      </div>

      <div className="w-[calc(100vw-1cm)] mt-8">
        <div className="border-4 border-black p-6">
          <h2 className="font-merriweather text-center text-4xl font-bold">
            - Sobre mí -
          </h2>
          <p className="text-justify font-serif mt-4">
            Nuestra colaboración en Sydicol como Aprendiz me ha permitido
            aplicar mis conocimientos técnicos en desarrollo de software,
            adquiridos en el SENA y actualmente enriquecidos en BYU-I. Mi pasión
            por la tecnología y el aprendizaje constante me motivan a enfrentar
            desafíos y encontrar soluciones innovadoras. Con habilidades en
            comunicación y relaciones interpersonales, contribuyo al equipo para
            alcanzar objetivos comunes, mientras sigo formándome en el campo de
            desarrollo de software. Mi meta es desarrollar software que no solo
            cumpla con los estándares de calidad sino que también genere un
            impacto positivo en la sociedad.
          </p>
        </div>
      </div>
    </div>
  );
};
