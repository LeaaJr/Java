import React from "react";
import { Header } from "../Components/Header";
import SectionCard from "../Sections/SectionCards";
import { Carrousell } from "../Sections/Carrousell";
import '../Styles/Home.css'

export function Home() {

    return ( 
            <>
            <Header />;
            <div className="text-center">
              <h1 className="text-"> Productos destacados </h1>
            </div>
            <Carrousell />; 
            
            <SectionCard />;

            </>
    )
  }

export default Home;


