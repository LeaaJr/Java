import React from "react";
import { SocialNav } from "../Components/SocialNav";

export function Header() {
  return (
    <div className="bg-black min-h-screen w-full text-white relative overflow-hidden">
      <main className="container mx-auto px-6 py-20 relative h-full flex items-center">
        {/* Contenedor grid para texto e imagen */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texto a la izquierda */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Experience Media Like Never Before
            </h1>
            <p className="text-gray-300 text-lg max-w-md">
              Enjoy award-winning stereo beats with wireless listening freedom
              and sleek, streamlined with premium padded and delivering
              first-rate playback.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Our Products
            </button>
          </div>

          {/* Imagen a la derecha */}
          <div className="flex justify-end">
            <img
              src="https://i.ibb.co/vB5LTFG/Headphone.png"
              alt="Premium Headphones"
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </main>

      {/* Iconos de redes sociales */}
      <SocialNav />
    </div>
  );
}

export default Header;