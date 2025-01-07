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
    <div className="left-0 flex items-center space-x-4 pl-4">
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
            className="text-3xl text-black transition duration-75 ease-in-out hover:scale-125 hover:opacity-75"
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
