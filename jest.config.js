module.exports = {
  preset: "react-native",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules", "/android", "/ios"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  coveragePathIgnorePatterns: [
    "/android/",
    "/coverage/",
    "/ios",
    "/node_modules/",
  ],
  coverageReporters: ["html", "json", "text-summary"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
