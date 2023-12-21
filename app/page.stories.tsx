import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/test';
import { within } from '@storybook/testing-library';
import Home from './page';

export default {
    parameters: {
        layout: 'centered',
    },
    component: Home,
} satisfies Meta<typeof Home>;

// https://storybook.js.org/blog/storybook-test/
export const Default: StoryObj<typeof Home> = {
    play({ canvasElement }) {
        const canvas = within(canvasElement);

        const hi = canvas.getByText('Hi');

        expect(hi).toBeInTheDocument();
    },
};
