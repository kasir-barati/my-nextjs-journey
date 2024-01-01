import {
    DependencyList,
    EffectCallback,
    useEffect,
    useRef,
} from 'react';

export function useUpdateEffect(
    effect: EffectCallback,
    deps: DependencyList | undefined,
) {
    const isMounted = useRef(false);
    console.log('inside the useUpdateEffect');

    // reset on unmount; in React 18, components can mount again
    useEffect(
        () => () => {
            console.log('unmounted');
            isMounted.current = false;
        },
        [],
    );

    useEffect(() => {
        if (isMounted.current) {
            return effect();
        }

        isMounted.current = true;
    }, deps);
}
