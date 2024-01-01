import React from 'react';
// README: Does not matter really, both works the same
// import { act } from 'react-dom/test-utils';
import { act, render } from '@testing-library/react';
import { useUpdateEffect } from './use-update-effect.hook';

describe('useUpdateEffect', () => {
    it('should call cleanup callback on unmount not rerender', () => {
        let expectedState: number;
        const TestComponent = ({
            dummyProps,
        }: {
            dummyProps: number;
        }) => {
            const [state, setState] = React.useState(0);
            expectedState = state;

            useUpdateEffect(() => {
                setState(state + 1);
            }, [state]);

            return <div>Hello {dummyProps}</div>;
        };
        const { unmount, rerender } = render(
            <TestComponent dummyProps={1} />,
        );

        expect(expectedState!).toBe(0);
        act(() => rerender(<TestComponent dummyProps={2} />));
        expect(expectedState!).toBe(1);
        act(() => unmount());
        act(() => render(<TestComponent dummyProps={3} />));
        expect(expectedState!).toBe(0);
    });
});
