import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  use: { baseURL: "http://127.0.0.1:3100" },
  webServer: {
    command: "pnpm start",
    env: { PORT: "3100", HOSTNAME: "127.0.0.1" },
    url: "http://127.0.0.1:3100",
    reuseExistingServer: !process.env.CI,
  },
  reporter: "list",
});
