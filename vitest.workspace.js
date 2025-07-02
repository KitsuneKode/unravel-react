import { project } from "vitest/config";

export default project([
  {
    extend: "./vite.config.js",
    test: {
      include: ["src/**/*node.{test,spec}.{js,ts,jsx,tsx}"],
      name: "happy-dom",
      environment: "happy-dom",
    },
  },
  {
    extend: "./vite.config.js",
    test: {
      setupFiles: ["vitest-browser-react"],
      include: ["src/**/*browser.{test,spec}.{js,ts,jsx,tsx}"],
      name: "browser",
      browser: {
        provider: "playwright",
        enabled: true,
        name: "chromium",
      },
    },
  },
]);
