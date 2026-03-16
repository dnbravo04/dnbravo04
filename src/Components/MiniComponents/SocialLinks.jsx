// SocialLinks.jsx
import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

const iconMap = {
  "X/Twitter": FaXTwitter,
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  WhatsApp: FaWhatsapp,
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
};

const SocialLinks = ({ links }) => {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.label];
        if (!Icon) {
          console.error(`Icon not found for label: ${link.label}`);
          return null;
        }
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-xl bg-manga-gray-100 border-2 border-manga-gray-300 text-manga-gray-700 hover:bg-manga-black hover:text-white hover:border-manga-black transition-all"
            aria-label={link.label}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
