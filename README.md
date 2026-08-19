# Remotion video

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm run dev
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npx remotion upgrade
```

## Animación: lector sobre puerta de cristal con lluvia

Composición (`src/Composition.tsx`, `RainOnReader`) en formato vertical
(1080x1350) que muestra el lector biométrico en plano medio sobre una
puerta de cristal simulada (fondo blanco, panel con reflejos y manija por
CSS), con lluvia cayendo sobre toda la escena y gotas grandes
deslizándose específicamente sobre el lector.

- La imagen del lector está en `public/reader.png`. Para usar otra,
  reemplaza ese archivo (o cambia el nombre en `src/Composition.tsx`).
- El área del lector dentro del panel (`READER_AREA`) controla dónde caen
  las gotas grandes; el tamaño/posición del panel de cristal y del lector
  se ajustan en los estilos del mismo archivo.
- `NUM_BACKGROUND_DROPS` / `NUM_READER_DROPS` controlan cuánta lluvia hay
  en cada capa.

Previsualiza en vivo:

```console
npm run dev
```

Renderiza el video final:

```console
npx remotion render RainOnReader out/video.mp4
```

### Instalación en Windows

1. Instala [Node.js LTS](https://nodejs.org/) (incluye npm).
2. Instala [Git](https://git-scm.com/download/win).
3. Clona el repositorio y entra en la carpeta del proyecto:

   ```console
   git clone https://github.com/valerit150/vall.git
   cd vall
   git checkout claude/create-video-setup-hefiof
   ```

4. Instala las dependencias:

   ```console
   npm install
   ```

5. Previsualiza en el editor de Remotion:

   ```console
   npm run dev
   ```

6. Renderiza el video final:

   ```console
   npx remotion render RainOnReader out/video.mp4
   ```

Remotion descargará automáticamente su propio Chrome headless la primera vez
que renderices (no requiere tener Chrome instalado aparte).

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
