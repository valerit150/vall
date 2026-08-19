import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const dataPath = path.join(rootDir, "data", "videos.json");
const outDir = path.join(rootDir, "out");

// Ruta opcional a un Chromium/Chrome ya instalado, para no depender de que
// Remotion descargue el suyo (útil en entornos con red restringida).
const browserExecutable = process.env.REMOTION_BROWSER_EXECUTABLE || undefined;

async function main() {
  const entries = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  console.log("Compilando el proyecto de Remotion...");
  const bundleLocation = await bundle({
    entryPoint: path.join(rootDir, "src", "index.ts"),
  });

  fs.mkdirSync(outDir, { recursive: true });

  for (const entry of entries) {
    console.log(`Renderizando "${entry.id}"...`);

    const composition = await selectComposition({
      serveUrl: bundleLocation,
      id: "MyComp",
      inputProps: entry.props,
      browserExecutable,
    });

    const outputLocation = path.join(outDir, `${entry.id}.mp4`);

    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation,
      inputProps: entry.props,
      browserExecutable,
    });

    console.log(`Listo: ${outputLocation}`);
  }

  console.log("Todos los videos fueron generados en la carpeta out/.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
