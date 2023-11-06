import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Party = () => {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="party"
      options={particlesOptions}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

const Intro = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Software Engineer",
        " Robotics Instructor",
        " Embedded Software developer",
      ],
      typeSpeed: 100,
      startDelay: 500,
      backSpeed: 50,
      backDelay: 700,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="intro" className="section">
      <Party />
      <div className="container">
        <div className="section-flex intro">
          <div className="section-left">
            <img
              src="https://raw.githubusercontent.com/hassanismail11/hassanismail11.github.io/main/public/images/intro.svg"
              alt="intro"
            />
          </div>
          <div className="section-right">
            <h3 className="color-white">HI!</h3>
            <h1 className="color-primary">Hassan Ismail</h1>
            <h3 className="color-white">
              I'm <span ref={el}></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
