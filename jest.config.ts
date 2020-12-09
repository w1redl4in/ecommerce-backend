export default {
  testEnvironment: 'node',
  preset: 'ts-jest',
  modulePathIgnorePatterns: ['dist', 'node_modules', 'coverage'],
  testMatch: ['**/?(*.)+(spec|test).(js|ts|tsx)'],
};
