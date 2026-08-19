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

## Generación automática de videos (por datos)

Este proyecto incluye una composición dinámica (`src/Composition.tsx`) que
acepta `title`, `subtitle` y `backgroundColor` como props, y un script que
renderiza un video por cada entrada de `data/videos.json`, sin necesidad de
editar nada a mano en cada ejecución.

1. Edita `data/videos.json` y añade tantas entradas como videos quieras
   generar (cada una con su `id` y sus `props`).
2. Ejecuta:

   ```console
   npm run render:batch
   ```

3. Los videos se generan en `out/` (uno por entrada, `out/<id>.mp4`).

Puedes seguir editando el diseño/animación en `src/Composition.tsx` y
previsualizarlo en vivo con `npm run dev`.

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

6. Genera los videos automáticamente a partir de `data/videos.json`:

   ```console
   npm run render:batch
   ```

Remotion descargará automáticamente su propio Chrome headless la primera vez
que renderices (no requiere tener Chrome instalado aparte). Si tu red
corporativa bloquea esa descarga, puedes apuntar a un Chrome/Chromium ya
instalado con la variable de entorno `REMOTION_BROWSER_EXECUTABLE`, por
ejemplo:

```console
set REMOTION_BROWSER_EXECUTABLE=C:\Program Files\Google\Chrome\Application\chrome.exe
npm run render:batch
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
