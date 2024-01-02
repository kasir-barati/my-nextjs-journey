import { act, renderHook } from '@testing-library/react';
import { useUpdateEffect } from './use-update-effect.hook';

describe('useUpdateEffect', () => {
    it('should not call the callback on the first render, but should on subsequent renders', () => {
        const effectCallback = jest.fn();

        const { rerender } = renderHook(
            ({ fakeDependency }: { fakeDependency: number }) =>
                useUpdateEffect(effectCallback, [fakeDependency]),
            { initialProps: { fakeDependency: 0 } },
        );

        // The first render skips the callback.
        expect(effectCallback).not.toHaveBeenCalled();
        // The second render invokes the callback.
        act(() => rerender({ fakeDependency: 1 }));
        expect(effectCallback).toHaveBeenCalledTimes(1);
    });
});
