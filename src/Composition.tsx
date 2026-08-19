import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  random,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// Área (en % del frame) donde vive el lector dentro del panel de cristal.
// Se usa para limitar las gotas "de detalle" a la zona del dispositivo.
const READER_AREA = {
  left: 22,
  right: 78,
  top: 34,
  bottom: 62,
};

const NUM_BACKGROUND_DROPS = 55;
const NUM_READER_DROPS = 22;

const backgroundDrops = new Array(NUM_BACKGROUND_DROPS).fill(0).map((_, i) => ({
  x: random(`bg-x-${i}`) * 100,
  delay: random(`bg-delay-${i}`) * 90,
  duration: 26 + random(`bg-duration-${i}`) * 26,
  length: 18 + random(`bg-length-${i}`) * 26,
  drift: (random(`bg-drift-${i}`) - 0.5) * 12,
}));

const readerDrops = new Array(NUM_READER_DROPS).fill(0).map((_, i) => ({
  x: READER_AREA.left + random(`rd-x-${i}`) * (READER_AREA.right - READER_AREA.left),
  startY: READER_AREA.top - random(`rd-start-${i}`) * 10,
  delay: random(`rd-delay-${i}`) * 130,
  duration: 70 + random(`rd-duration-${i}`) * 70,
  size: 8 + random(`rd-size-${i}`) * 12,
}));

export const RainOnReader: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#ffffff" }}>
      {/* Puerta de cristal simulada */}
      <AbsoluteFill
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            position: "relative",
            width: "72%",
            height: "86%",
            borderRadius: 18,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(210,225,235,0.15) 35%, rgba(180,200,215,0.25) 60%, rgba(255,255,255,0.5) 100%)",
            border: "1px solid rgba(140,165,185,0.45)",
            boxShadow:
              "inset 0 0 60px rgba(255,255,255,0.6), inset 0 0 2px rgba(120,140,160,0.5), 0 10px 40px rgba(60,80,100,0.12)",
            overflow: "hidden",
          }}
        >
          {/* Reflejo diagonal del cristal */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-40%",
              width: "60%",
              height: "160%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0) 100%)",
              transform: "rotate(8deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "55%",
              width: "22%",
              height: "160%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 100%)",
              transform: "rotate(8deg)",
            }}
          />

          {/* Manija de la puerta */}
          <div
            style={{
              position: "absolute",
              right: 18,
              top: "48%",
              width: 12,
              height: 110,
              borderRadius: 6,
              background:
                "linear-gradient(90deg, #cfd8e0, #f4f7f9 45%, #b9c4cc)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          />

          {/* Lector */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "46%",
              transform: "translate(-50%, -50%)",
              width: "62%",
            }}
          >
            <Img
              src={staticFile("reader.png")}
              style={{ width: "100%", display: "block" }}
            />
          </div>

          {/* Gotas grandes deslizándose sobre el lector */}
          {readerDrops.map((drop, i) => {
            const localFrame = (frame + drop.delay) % drop.duration;
            const progress = localFrame / drop.duration;
            const y = interpolate(
              progress,
              [0, 1],
              [drop.startY, READER_AREA.bottom + 18],
            );
            const opacity = interpolate(
              progress,
              [0, 0.08, 0.85, 1],
              [0, 0.9, 0.9, 0],
            );
            const wobble = Math.sin((frame + drop.delay) / 10) * 2.5;

            return (
              <div
                key={`reader-${i}`}
                style={{
                  position: "absolute",
                  left: `${drop.x}%`,
                  top: `${y}%`,
                  transform: `translateX(${wobble}px)`,
                  width: drop.size * 0.55,
                  height: drop.size,
                  borderRadius: "50% 50% 50% 50% / 65% 65% 35% 35%",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.75))",
                  boxShadow: "inset -1px -1px 2px rgba(0,0,0,0.15)",
                  opacity,
                  filter: "blur(0.3px)",
                }}
              />
            );
          })}
        </div>
      </AbsoluteFill>

      {/* Lluvia fina cayendo sobre toda la escena */}
      {backgroundDrops.map((drop, i) => {
        const localFrame = (frame + drop.delay) % drop.duration;
        const progress = localFrame / drop.duration;
        const y = interpolate(progress, [0, 1], [-40, height + 40]);
        const x = (drop.x / 100) * width + drop.drift * progress;
        const opacity = interpolate(
          progress,
          [0, 0.1, 0.85, 1],
          [0, 0.55, 0.55, 0],
        );

        return (
          <div
            key={`bg-${i}`}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 2,
              height: drop.length,
              borderRadius: 2,
              background:
                "linear-gradient(180deg, rgba(150,180,205,0), rgba(150,180,205,0.55))",
              opacity,
              transform: "rotate(6deg)",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
