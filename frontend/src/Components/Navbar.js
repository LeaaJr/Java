import React, { useEffect } from "react";
import '../Styles/Navbar.css'

const Navbar = () => {
  useEffect(() => {

    // Open Close Navbar Menu on Click Burger

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []); // Empty array to run the effect only once when the component mounts

  return (
    <>
      <main className="main">
        <section className="section banner banner-section">
          <div className="container banner-column">
            <img
              className="banner-image"
              src="https://i.ibb.co/vB5LTFG/Headphone.png"
              alt="banner"
            />
            <div className="banner-inner">
              <h1 className="heading-xl">Experience Media Like Never Before</h1>
              <p className="paragraph">
                Enjoy award-winning stereo beats with wireless listening freedom
                and sleek, streamlined with premium padded and delivering first-rate
                playback.
              </p>
              <button className="btn btn-darken btn-inline">
                Our Products<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div className="banner-links">
              <a href="#" title="">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#" title="">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="#" title="">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" title="">
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Navbar;
