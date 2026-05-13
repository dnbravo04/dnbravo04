import React from "react";

const SectionTitle = ({ label, title, dark = false }) => {
  return (
    <div className="mb-20 animate-fade-in">
      <div className="flex items-center gap-4 mb-4">
        <div className={`h-px flex-1 ${dark ? 'bg-manga-gray-700' : 'bg-manga-gray-300'}`}></div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
          {label && (
            <span className={`font-inter text-sm font-semibold tracking-[0.15em] uppercase ${dark ? 'text-manga-gray-500' : 'text-manga-gray-600'}`}>
              {label}
            </span>
          )}
          <div className="w-2 h-2 bg-manga-accent-olive rotate-45"></div>
        </div>
        <div className={`h-px flex-1 ${dark ? 'bg-manga-gray-700' : 'bg-manga-gray-300'}`}></div>
      </div>
      <h2 className={`font-display text-5xl md:text-6xl text-center tracking-tight ${dark ? 'text-white' : 'text-manga-black'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
