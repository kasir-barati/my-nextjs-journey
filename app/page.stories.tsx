import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import Home from './page';

export default {
    parameters: {
        layout: 'centered',
    },
    component: Home,
} satisfies Meta<typeof Home>;

export const Default: StoryObj<typeof Home> = {
    play({ canvasElement }) {
        const canvas = within(canvasElement);

        const hi = canvas.getByText('Hi');

        expect(hi).toBeInTheDocument();
    },
};
