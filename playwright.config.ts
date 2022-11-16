import { PlaywrightTestConfig, devices } from "@playwright/test";

export default {
  testMatch: /.*e2e.ts/,
  use: {
    baseURL: "http://localhost:3000",
  },
  projects: ["Desktop Chrome", "Desktop Firefox", "Desktop Safari"].map(
    (device) => ({ name: device, use: devices[device] })
  ),
} as PlaywrightTestConfig;
