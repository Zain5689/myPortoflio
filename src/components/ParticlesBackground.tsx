import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState, useCallback } from "react";
import type { Engine } from "@tsparticles/engine";
import { loadSnowPreset } from "@tsparticles/preset-snow";

const getParticlesOptions = (isDark: boolean) => ({
  background: { color: { value: isDark ? "#030712" : "#ffffff" } },
  particles: {
    color: { value: isDark ? ["#e0f2fe", "#78c7fc"] : ["#1e3a8a", "#78c7fc"] },
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
      value: { min: isDark ? 0.2 : 0.5, max: 0.9 },
      animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false },
    },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: { enable: false },
  detectRetina: true,
});

const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
      await loadSnowPreset(engine);
    }).then(() => setReady(true));

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return ready ? (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={getParticlesOptions(isDark)}
    />
  ) : null;
};

export default ParticlesBackground;
