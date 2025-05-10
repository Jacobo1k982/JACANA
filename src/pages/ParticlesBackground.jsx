// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
    const particlesInit = async (main) => {
        await loadSlim(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: {
                    color: "#0f0c29",
                },
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#a855f7" },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#a855f7",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1.6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                    },
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "grab" },
                        onclick: { enable: true, mode: "push" },
                        resize: true,
                    },
                    modes: {
                        grab: { distance: 200, links: { opacity: 0.5 } },
                        push: { quantity: 4 },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}
