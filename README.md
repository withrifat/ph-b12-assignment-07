# App Store Showcase (React + Vite)

Live: https://ph-b12-assignment-08.vercel.app/

## Overview

Modern, responsive app store UI built with React and Vite. It lists apps, shows detailed pages with charts, and supports installing/uninstalling apps with persistence and global state. Navigation uses a smooth loading animation and invalid app routes show a friendly error page.

## Key Features

- Centralized `useAppsData` with context provider for global app state
- Install/Uninstall apps with localStorage persistence
- Installed Apps section with modern full-width cards, downloads/ratings/size and sorting by size
- App Details page with ratings chart (Recharts) and install button that locks after install
- Toast notifications for install/uninstall (react-toastify), deduped to one toast
- Smooth route transition loader via `Loader.jsx` (1s on initial load and navigation)
- Error page for unknown app IDs under `appdetails/:id` using `AppError` with `/App-Error.png`
- Clean, responsive UI using TailwindCSS and daisyUI patterns

## Tech Stack

- React 19, React Router 7
- Vite 7
- TailwindCSS, daisyUI
- Recharts, React Icons
- react-toastify

## Project Structure (selected)

```
src/
  Components/
    Apps/Apps.jsx
    AppsDetails/AppDetails.jsx
    InstalledApps/InstalledApps.jsx
    HomeApps/HomeApps.jsx
    Loader/Loader.jsx
    NavBar/NavBar.jsx
    Footer/Footer.jsx
  Hooks/
    AppsDataContext.jsx
  Layouts/
    MainLayout.jsx
  Pages/
    Home.jsx
    AppError.jsx
  Routes/
    Router.jsx
public/
  data.json (app catalog)
  App-Error.png (error image)
```

## How It Works

- `AppsDataProvider` fetches `/data.json` once and exposes `apps`, `appsLoading`, `installedApps`, selectors, and actions.
- Install/Uninstall updates context and persists to `localStorage` under `installedApps`.
- `InstalledApps` shows a header with count, sort controls (size asc/desc), and detailed cards.
- `AppDetails` uses `:id` param, shows `AppError` if not found, and disables the button once installed.
- `MainLayout` shows `Loader` during navigation and on first load for 1s.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
3. Build
   ```bash
   npm run build
   ```

## Environment & Assets

- App data: `public/data.json`
- Error image: `public/App-Error.png`
- Branding/logo: `public/logo.png`

## Notes

- Routes:
  - `/` Home
  - `/apps` All Apps
  - `/appdetails/:id` App Details (invalid IDs show in-page error)
  - `/installed` Installed Apps
  - `/installation` Installation guide

