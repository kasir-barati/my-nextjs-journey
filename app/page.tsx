'use client';

import {
    darkMode,
    lightMode,
} from '../libs/components/application/application.state';
import { useTypedSelector } from '../libs/store/store';

export default function Home() {
    const darkTheme = useTypedSelector(
        (state) => state.application.darkMode,
    );
    function onClickHandler() {
        !darkTheme ? darkMode() : lightMode();
    }

    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
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
