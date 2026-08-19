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

## Animación: lluvia sobre una imagen

Este proyecto tiene una sola composición (`src/Composition.tsx`,
`RainOnImage`) que muestra una imagen con gotas de lluvia deslizándose
encima.

1. Coloca tu imagen en `public/photo.jpg` (ese es el nombre que espera la
   composición; puedes cambiarlo en `src/Composition.tsx` si usas otro
   nombre o formato).
2. Previsualiza en vivo:

   ```console
   npm run dev
   ```

3. Cuando estés conforme, renderiza el video final:

   ```console
   npx remotion render RainOnImage out/video.mp4
   ```

Puedes ajustar la cantidad de gotas (`NUM_DROPS`), su velocidad, tamaño u
opacidad directamente en `src/Composition.tsx`.

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

5. Coloca tu imagen en `public/photo.jpg` y previsualiza en el editor de
   Remotion:

   ```console
   npm run dev
   ```

6. Renderiza el video final:

   ```console
   npx remotion render RainOnImage out/video.mp4
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
