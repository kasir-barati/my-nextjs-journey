'use client';

import { useRouter } from 'next/navigation';
import {
    darkMode,
    lightMode,
} from '../libs/components/application/application.state';
import { Button } from '../libs/components/button/button.component';
import {
    useAppDispatch,
    useTypedSelector,
} from '../libs/store/store';

export default function Home() {
    const router = useRouter();
    const darkTheme = useTypedSelector(
        (state) => state.application.darkMode,
    );
    const dispatch = useAppDispatch();
    function onClickHandler() {
        !darkTheme ? dispatch(darkMode()) : dispatch(lightMode());
    }
    function handleClick() {
        router.back();
    }

    return (
        <main>
            <h1>Hi</h1>
            <br />
            <Button onClick={handleClick}>Go back</Button>
            &nbsp;
            <button onClick={onClickHandler}>Change theme</button>
        </main>
    );
}
