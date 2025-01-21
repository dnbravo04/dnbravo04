import React from "react";
import SocialLinks from "./SocialLinks";

const socialLinks = [
  { href: "https://github.com/dnbravo04", label: "GitHub" },
  { href: "https://www.linkedin.com/in/dnbravo04/", label: "LinkedIn" },
  { href: "https://wa.me/573023839873", label: "WhatsApp" },
  { href: "https://www.facebook.com/dnbravoarias/", label: "Facebook" },
  { href: "https://www.instagram.com/diegobr04/", label: "Instagram" },
  { href: "https://x.com/diegobr04", label: "X/Twitter" },
];

export const Title = () => {
  return (
    <main className="min-h-screen p-4 flex items-center justify-center">
      <div className="w-[calc(100vw-1cm)] h-[calc(100vh-1cm)] border-4 border-black grid grid-cols-2 grid-rows-2">
        <header className="col-start-1 row-start-1 content-end">
          <SocialLinks links={socialLinks} className="mb-4" />
        </header>

        <section className="row-start-2 col-start-1 flex flex-col items-start pl-4">
          <h1 className="font-merriweather text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl">
            Diego Bravo Arias
          </h1>
        </section>

        <figure className="row-start-1 row-end-3 col-start-2 flex justify-center items-end">
          <img
            src="/man.webp"
            alt="Fotografía de Diego Bravo Arias"
            className="h-5/6 object-cover"
          />
        </figure>
      </div>
    </main>
  );
};

export default Title;