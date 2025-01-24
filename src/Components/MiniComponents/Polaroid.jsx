import React from "react";

const Polaroid = ({ image, altText, caption, alignRight }) => {
  const rotation = Math.random() * 6 - 3;

  return (
    <div
      className={`inline-block m-1 relative ${alignRight ? "ml-auto" : ""}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="bg-gray-200 border-4 border-gray-200 shadow-md text-center"
        style={{ aspectRatio: "1 / 1", width: "180px" }}
      >
        <img
          src={image}
          alt={altText || "Imagen Polaroid"}
          className="w-full h-full object-cover block"
        />
        {caption && (
          <div className="text-md mt-1 p-1 break-words font-caveat">{caption}</div>
        )}
      </div>
    </div>
  );
};

export default Polaroid;
