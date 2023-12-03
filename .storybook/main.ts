import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

export default {
    stories: [
        '../app/**/*.mdx',
        '../libs/**/*.mdx',
        '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../libs/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/jest',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {
            nextConfigPath: path.resolve(
                __dirname,
                '../next.config.js',
            ),
        },
    },
    docs: {
        autodocs: 'tag',
    },
    typescript: {
        check: true,
        skipCompiler: false,
    },
} satisfies StorybookConfig;
