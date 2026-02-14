import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState, useCallback } from "react";
import type { Engine } from "@tsparticles/engine";
import { loadSnowPreset } from "@tsparticles/preset-snow";

const particlesOptions = {
  background: { color: { value: "#030712" } }, // use --color-bg-dark
  particles: {
    color: { value: ["#e0f2fe", "#78c7fc"] }, // primary-light + primary
    links: { enable: false },
    move: {
      enable: true,
      direction: "bottom",
      random: true,
      straight: false,
      speed: 0.8,
      outModes: { default: "destroy" },
    },
    number: { density: { enable: true, value_area: 800 }, value: 120 },
    opacity: {
      value: { min: 0.2, max: 0.9 },
      animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false },
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: { enable: false },
  detectRetina: true,
};

const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
      await loadSnowPreset(engine);
    }).then(() => setReady(true));
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return ready ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={particlesOptions}
    />
  ) : null;
};

export default ParticlesBackground;
