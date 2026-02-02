import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState, useCallback } from "react";
import type { Engine } from "@tsparticles/engine";
import { loadSnowPreset } from "@tsparticles/preset-snow";

const particlesOptions = {
  background: { color: { value: "#000" } },
  particles: {
    color: { value: "#ffffff" },
    links: { enable: false },
    move: {
      // enable: true,
      enable: false,
      direction: "bottom" as const,
      random: true,
      straight: false,
      speed: 1,
      outModes: { default: "destroy" as const },
    },
    number: { density: { enable: true, value_area: 800 }, value: 100 },
    opacity: { value: { min: 0.1, max: 0.8 } },
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
