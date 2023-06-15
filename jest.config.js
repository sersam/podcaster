module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/views/**/*.js"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
  },
};
