import '@testing-library/jest-dom';

global.console = {
    ...console,
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
} as unknown as Console;
