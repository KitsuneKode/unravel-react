import { useState } from "react";
import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/contexts/theme-context.jsx";
import "@/App.css";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
          margin: "0 auto",
          maxWidth: "800px",
        }}
      >
        <Link to="/anon">Anon</Link>
        <Link to="/">/</Link>
        <Link to="/common">Common</Link>
        <Outlet />
        <TanStackRouterDevtools position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}
