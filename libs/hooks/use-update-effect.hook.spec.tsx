import { act, renderHook } from '@testing-library/react';
import { useUpdateEffect } from './use-update-effect.hook';

describe('useUpdateEffect', () => {
    it('should not call the callback on the first render, but should on subsequent renders', () => {
        const effectCallback = jest.fn();

        const { rerender } = renderHook(
            ({ fakeDependency }) =>
                useUpdateEffect(effectCallback, [fakeDependency]),
            {
                initialProps: { fakeDependency: 0 },
            },
        );

        // The first render skips the callback.
        expect(effectCallback).not.toHaveBeenCalled();
        // The second render invokes the callback.
        act(() => rerender({ fakeDependency: 1 }));
        expect(effectCallback).toHaveBeenCalledTimes(1);
    });

    it('should reset shouldApply on unmount, skipping the first render but calling on subsequent renders', () => {
        const effectCallback = jest.fn();

        const { unmount } = renderHook(
            ({ fakeDependency }) =>
                useUpdateEffect(effectCallback, [fakeDependency]),
            {
                initialProps: { fakeDependency: 0 },
            },
        );

        act(() => unmount());
        const { rerender } = renderHook(
            ({ fakeDependency }) =>
                useUpdateEffect(effectCallback, [fakeDependency]),
            {
                initialProps: { fakeDependency: 1 },
            },
        );
        act(() => rerender({ fakeDependency: 2 }));
        expect(effectCallback).toHaveBeenCalledTimes(1);
    });

    it('should not reset shouldApply on rerenders, always calling the callback', () => {
        const effectCallback = jest.fn();

        const { rerender } = renderHook(
            ({ fakeDependency }) =>
                useUpdateEffect(effectCallback, [fakeDependency]),
            {
                initialProps: { fakeDependency: 0 },
            },
        );

        act(() => rerender({ fakeDependency: 1 }));
        expect(effectCallback).toHaveBeenCalledTimes(1);
        act(() => rerender({ fakeDependency: 2 }));
        expect(effectCallback).toHaveBeenCalledTimes(2);
        act(() => rerender({ fakeDependency: 3 }));
        expect(effectCallback).toHaveBeenCalledTimes(3);
    });
});
