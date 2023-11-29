'use client';

import {
    darkMode,
    lightMode,
} from '../libs/components/application/application.state';
import {
    useAppDispatch,
    useTypedSelector,
} from '../libs/store/store';

export default function Home() {
    const darkTheme = useTypedSelector(
        (state) => state.application.darkMode,
    );
    const dispatch = useAppDispatch();
    function onClickHandler() {
        !darkTheme ? dispatch(darkMode()) : dispatch(lightMode());
    }

    return (
        <main
            style={{
                display: 'block',
                textAlign: 'center',
                margin: 13,
                fontSize: 70,
            }}
        >
            Hi
            <br />
            <button onClick={onClickHandler}>Change theme</button>
        </main>
    );
}
