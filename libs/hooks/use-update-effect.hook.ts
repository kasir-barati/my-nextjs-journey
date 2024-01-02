import {
    DependencyList,
    EffectCallback,
    useEffect,
    useRef,
} from 'react';

/**
 * @description A react hook that calls the effect callback only on the second render and the ones after that, and only if the dependencies change. But it also resets the effect callback on unmount -- this is so that the effect callback is not called on the first render after the component is remounted. This case is important for components that use the `useUpdateEffect` hook to setup some side effects on the second render after the component is mounted, but if user refreshes/reloads the page, the effect callback should not be called again on the first run, but the ones after that.
 */
export const useUpdateEffect = (
    effectCallback: EffectCallback,
    dependencies: DependencyList | undefined,
) => {
    const shouldApply = useRef(false);
    console.log('useUpdateEffect', shouldApply.current);

    useEffect(() => {
        console.log('effect', shouldApply.current);
        // Check if the component is mounted before executing the effect
        if (shouldApply.current) {
            return effectCallback();
        }

        // Set shouldApply to true after the initial render
        shouldApply.current = true;

        // Cleanup the effect on unmount
        return () => {
            console.log('cleanup'); // this cleanup is being called after I call rerender()!
            shouldApply.current = false;
        };
    }, dependencies);
};
