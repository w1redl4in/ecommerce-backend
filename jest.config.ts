export default {
  testEnvironment: 'node',
  preset: 'ts-jest',
  modulePathIgnorePatterns: [
    'dist',
    'node_modules',
    'coverage',
    '<rootDir>/apps/*/*.entity.ts',
  ],
  testMatch: ['**/?(*.)+(spec|test).(js|ts|tsx)'],
};
