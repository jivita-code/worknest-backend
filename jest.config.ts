import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/tests/**/*.test.ts", "<rootDir>/tests/**/*.test.ts"],
  clearMocks: true,
  moduleFileExtensions: ["ts", "js", "json"],
};

export default config;