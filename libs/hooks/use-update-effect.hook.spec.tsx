import { act, renderHook } from '@testing-library/react';
import { useUpdateEffect } from './use-update-effect.hook';

describe('useUpdateEffect', () => {
    it('should not call the callback on the first render, but should on subsequent renders', () => {
        let fakeDependency = 1;
        const effectCallback = jest.fn();

        const { rerender } = renderHook(() =>
            useUpdateEffect(effectCallback, [fakeDependency]),
        );

        // The first render skips the callback.
        expect(effectCallback).not.toHaveBeenCalled();
        // The second render invokes the callback.
        act(() => fakeDependency++ && rerender());
        expect(effectCallback).toHaveBeenCalledTimes(1);
    });
});
