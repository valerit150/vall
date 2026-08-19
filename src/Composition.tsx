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

const NUM_DROPS = 25;

const drops = new Array(NUM_DROPS).fill(0).map((_, i) => ({
  x: random(`drop-x-${i}`) * 100,
  delay: random(`drop-delay-${i}`) * 90,
  duration: 40 + random(`drop-duration-${i}`) * 40,
  size: 6 + random(`drop-size-${i}`) * 10,
}));

export const RainOnImage: React.FC = () => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Img
        src={staticFile("photo.jpg")}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {drops.map((drop, i) => {
        const localFrame = (frame + drop.delay) % drop.duration;
        const progress = localFrame / drop.duration;
        const y = interpolate(progress, [0, 1], [-40, height + 40]);
        const opacity = interpolate(
          progress,
          [0, 0.1, 0.9, 1],
          [0, 1, 1, 0],
        );
        const wobble = Math.sin((frame + drop.delay) / 8) * 4;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${drop.x}%`,
              top: y,
              transform: `translateX(${wobble}px)`,
              width: drop.size * 0.5,
              height: drop.size,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.65))",
              opacity,
              filter: "blur(0.5px)",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
