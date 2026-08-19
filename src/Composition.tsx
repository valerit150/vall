import { z } from "zod";
import {
  AbsoluteFill,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const myCompSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  backgroundColor: z.string().default("#0b1120"),
});

type Props = z.infer<typeof myCompSchema>;

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={150}
      fps={30}
      width={1280}
      height={720}
      schema={myCompSchema}
      defaultProps={{
        title: "Hola Mundo",
        subtitle: "Video generado automáticamente con Remotion",
        backgroundColor: "#0b1120",
      }}
    />
  );
};

export const MyComponent: React.FC<Props> = ({
  title,
  subtitle,
  backgroundColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleProgress = spring({ frame, fps, config: { damping: 200 } });
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);
  const titleScale = interpolate(titleProgress, [0, 1], [0.8, 1]);

  const subtitleProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 200 },
  });
  const subtitleOpacity = interpolate(subtitleProgress, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        padding: 80,
      }}
    >
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          color: "white",
          fontSize: 80,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {title}
      </div>
      <div
        style={{
          opacity: subtitleOpacity,
          color: "#94a3b8",
          fontSize: 36,
          marginTop: 24,
          textAlign: "center",
        }}
      >
        {subtitle}
      </div>
    </AbsoluteFill>
  );
};
