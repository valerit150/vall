import "./index.css";
import { Composition } from "remotion";
import { RainOnReader } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RainOnReader"
        component={RainOnReader}
        durationInFrames={180}
        fps={30}
        width={1080}
        height={1350}
      />
    </>
  );
};
