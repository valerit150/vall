import "./index.css";
import { Composition } from "remotion";
import { RainOnImage } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="RainOnImage"
        component={RainOnImage}
        durationInFrames={180}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};
