module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>setup-test.js'],
  testRegex: 'src/.*\\.spec\\.ts(x)$',
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coveragePathIgnorePatterns: ['node_modules'],
};
