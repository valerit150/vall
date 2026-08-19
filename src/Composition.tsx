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
  left: 20,
  right: 80,
  top: 30,
  bottom: 64,
};

const NUM_BACKGROUND_DROPS = 46;
const NUM_READER_DROPS = 16;

const backgroundDrops = new Array(NUM_BACKGROUND_DROPS).fill(0).map((_, i) => ({
  x: random(`bg-x-${i}`) * 100,
  delay: random(`bg-delay-${i}`) * 100,
  duration: 30 + random(`bg-duration-${i}`) * 30,
  length: 22 + random(`bg-length-${i}`) * 30,
  drift: (random(`bg-drift-${i}`) - 0.5) * 10,
  width: 1.4 + random(`bg-width-${i}`) * 1.4,
}));

const readerDrops = new Array(NUM_READER_DROPS).fill(0).map((_, i) => ({
  x: READER_AREA.left + random(`rd-x-${i}`) * (READER_AREA.right - READER_AREA.left),
  startY: READER_AREA.top - random(`rd-start-${i}`) * 8,
  delay: random(`rd-delay-${i}`) * 150,
  duration: 90 + random(`rd-duration-${i}`) * 90,
  size: 10 + random(`rd-size-${i}`) * 14,
}));

export const RainOnReader: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#f4f5f6" }}>
      {/* Puerta de cristal */}
      <AbsoluteFill
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            position: "relative",
            width: "80%",
            height: "88%",
            borderRadius: 6,
            background:
              "linear-gradient(155deg, #eef2f4 0%, #dfe6ea 30%, #e9eef0 55%, #d7dee2 78%, #eef2f4 100%)",
            boxShadow:
              "0 30px 70px rgba(30,40,50,0.18), 0 4px 14px rgba(30,40,50,0.12)",
            overflow: "hidden",
          }}
        >
          {/* Manchas difusas del exterior, se ven borrosas a través del cristal */}
          <div
            style={{
              position: "absolute",
              top: "-10%",
              left: "-15%",
              width: "55%",
              height: "45%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(150,180,150,0.35), rgba(150,180,150,0) 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-15%",
              right: "-10%",
              width: "50%",
              height: "40%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(140,160,190,0.3), rgba(140,160,190,0) 70%)",
              filter: "blur(45px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "30%",
              right: "-8%",
              width: "30%",
              height: "30%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,240,210,0.25), rgba(255,240,210,0) 70%)",
              filter: "blur(35px)",
            }}
          />

          {/* Marco metálico superior e inferior de la puerta */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 14,
              background: "linear-gradient(180deg, #c7ced2, #9aa3a8)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 14,
              background: "linear-gradient(0deg, #c7ced2, #9aa3a8)",
            }}
          />

          {/* Reflejo diagonal del cristal */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-40%",
              width: "55%",
              height: "160%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0) 100%)",
              transform: "rotate(10deg)",
              mixBlendMode: "screen",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "58%",
              width: "18%",
              height: "160%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
              transform: "rotate(10deg)",
              mixBlendMode: "screen",
            }}
          />

          {/* Viñeta de esquinas para dar volumen al cristal */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              boxShadow: "inset 0 0 90px rgba(20,30,40,0.16)",
            }}
          />

          {/* Manija de la puerta */}
          <div
            style={{
              position: "absolute",
              right: 26,
              top: "44%",
              width: 14,
              height: 150,
              borderRadius: 7,
              background:
                "linear-gradient(90deg, #a8b0b6 0%, #eef1f2 30%, #f8fafa 48%, #eef1f2 62%, #8f979d 100%)",
              boxShadow: "2px 4px 10px rgba(0,0,0,0.28)",
            }}
          />

          {/* Sombra de contacto del lector sobre el cristal */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: `${READER_AREA.bottom + 3}%`,
              transform: "translateX(-50%)",
              width: "58%",
              height: 26,
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse, rgba(15,20,25,0.28), rgba(15,20,25,0) 72%)",
              filter: "blur(6px)",
            }}
          />

          {/* Lector */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "45%",
              transform: "translate(-50%, -50%)",
              width: "64%",
              filter: "drop-shadow(0 14px 18px rgba(10,15,20,0.35))",
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
              [drop.startY, READER_AREA.bottom + 14],
            );
            const opacity = interpolate(
              progress,
              [0, 0.08, 0.88, 1],
              [0, 0.95, 0.95, 0],
            );
            const wobble = Math.sin((frame + drop.delay) / 11) * 2;
            const trailHeight = interpolate(
              progress,
              [0, 1],
              [0, drop.size * 4],
            );

            return (
              <React.Fragment key={`reader-${i}`}>
                {/* estela húmeda que deja la gota al caer */}
                <div
                  style={{
                    position: "absolute",
                    left: `${drop.x}%`,
                    top: `${drop.startY}%`,
                    transform: `translateX(${wobble}px)`,
                    width: drop.size * 0.22,
                    height: trailHeight,
                    borderRadius: 3,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.35))",
                    opacity: opacity * 0.6,
                  }}
                />
                {/* gota */}
                <div
                  style={{
                    position: "absolute",
                    left: `${drop.x}%`,
                    top: `${y}%`,
                    transform: `translateX(${wobble}px)`,
                    width: drop.size * 0.62,
                    height: drop.size,
                    borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%",
                    background:
                      "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95), rgba(255,255,255,0.35) 30%, rgba(180,195,205,0.35) 62%, rgba(120,140,155,0.55) 100%)",
                    boxShadow:
                      "inset -2px -3px 3px rgba(20,30,40,0.35), inset 2px 2px 2px rgba(255,255,255,0.6), 0 1px 2px rgba(20,30,40,0.25)",
                    opacity,
                    backdropFilter: "blur(0.5px)",
                  }}
                />
              </React.Fragment>
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
          [0, 0.12, 0.82, 1],
          [0, 0.5, 0.5, 0],
        );

        return (
          <div
            key={`bg-${i}`}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: drop.width,
              height: drop.length,
              borderRadius: 2,
              background:
                "linear-gradient(180deg, rgba(140,160,175,0), rgba(230,238,242,0.7))",
              opacity,
              transform: "rotate(7deg)",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
