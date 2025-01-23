import React from "react";

export const AboutMe = () => {
  return (
    <div className="w-[calc(100vw-1cm)] grid grid-cols-2">
      <div className="col-start-1 items-center justify-center mx-auto">
        <img src="/images.jpeg" alt="image" />
      </div>
      <div className="col-start-2">
        <div className="border-4 border-black p-6 m-0">
          <h2 className="font-merriweather text-center text-4xl font-bold">
           - About me -
          </h2>
          <p className="text-justify font-serif">
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
