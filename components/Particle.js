import React from "react";
import Particles from "react-tsparticles";

export const CParticle = () => {
  return (
    <div
     className="z-0"
    >
      <Particles
        className=""
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#ffff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 5,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#F8485E",
            },
            links: {
              color: "#2C394B",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed:5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1500,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 8,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};
