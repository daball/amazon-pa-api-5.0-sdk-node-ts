// jest.config.ts
import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "node",
  preset: 'ts-jest/presets/js-with-ts-esm',
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};

export default jestConfig;