import React from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function SocialNav() {
  return (
    <div className="flex space-x-4 justify-center mt-8">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors"
      >
        <Facebook size={24} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors"
      >
        <Twitter size={24} />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors"
      >
        <Youtube size={24} />
      </a>
    </div>
  );
}