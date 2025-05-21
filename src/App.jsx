import { useState } from "react";
import "./app.css";
import rocketIcon from "./assets/rocket.svg";
import databaseIcon from "./assets/database-fill.svg";
import paintIcon from "./assets/palette-fill.svg";
import personIcon from "./assets/person-vcard-fill.svg";
import bracketsIcon from "./assets/braces-asterisk.svg";
import Content from "./pages/content";
import InitialContent from "./pages";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

/**
 * React Router Configuration
 *
 * This configuration defines a route hierarchy using `createBrowserRouter`.
 * It's used in apps created with React Router v6.4+.
 *
 * We're also setting the `basename` to `/fireploy`, which is required
 * when your app is deployed to a subdirectory (e.g., https://example.com/fireploy).
 *
 * This ensures that all route matching and navigation functions
 * correctly within that subdirectory.
 */
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Template />,
      children: [
        {
          index: true,
          element: <InitialContent />,
        },
        {
          path: "last",
          element: <Content />,
        },
      ],
    },
  ],
  // Base path where the app is hosted
  {
    basename: import.meta.env.VITE_BASE_PATH,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

/**
 * Template for Fireploy React Project
 * @component
 */
function Template() {
  const totalSpikes = 16;
  const radius = 120;

  const rays = Array.from({ length: totalSpikes }, (_, i) => {
    const angle = (360 / totalSpikes) * i;
    return (
      <div
        key={i}
        className="ray"
        style={{
          position: "absolute",
          transform: `rotate(${angle}deg) translate(${radius}px)`,
          transformOrigin: "0 0",
        }}
      />
    );
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: "-80px",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="containerRaysWrapper">
            <div className="containerRays">{rays}</div>
          </div>
          <div className="sun" />
          <div className="iconContainer">
            <img src={rocketIcon} alt="Rocket Icon" className="icon" />
          </div>
          <div>
            <img src={bracketsIcon} alt="Rocket Icon" className="iconElement" />
            <img src={databaseIcon} alt="Database Icon" className="iconElement" />
            <img src={paintIcon} alt="Paint Icon" className="iconElement" />
            <img src={personIcon} alt="Person Icon" className="iconElement" />
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            <svg className="containerLines" height="100%" width="100%">
              <line x1="150" y1="120" x2="300" y2="120" stroke="#1976d2" />
              <line x1="300" y1="120" x2="300" y2="200" stroke="#1976d2" />
              <line x1="300" y1="200" x2="500" y2="200" stroke="#1976d2" />
              <line x1="500" y1="200" x2="700" y2="200" stroke="#1976d2" />
              <line x1="700" y1="200" x2="700" y2="120" stroke="#1976d2" />
              <line x1="700" y1="120" x2="800" y2="120" stroke="#1976d2" />
              <line x1="300" y1="280" x2="500" y2="280" stroke="#1976d2" />
              <line x1="300" y1="280" x2="300" y2="360" stroke="#1976d2" />
              <line x1="300" y1="360" x2="140" y2="360" stroke="#1976d2" />
              <line x1="500" y1="280" x2="700" y2="280" stroke="#1976d2" />
              <line x1="700" y1="280" x2="700" y2="360" stroke="#1976d2" />
              <line x1="700" y1="360" x2="820" y2="360" stroke="#1976d2" />
            </svg>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "-64px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Fireploy App</h1>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default App;
