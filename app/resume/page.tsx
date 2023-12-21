'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../libs/components/button/button.component';
import { useTypedSelector } from '../../libs/store/store';

export default function Resume() {
    const router = useRouter();
    const userCameFromAnotherSite = useTypedSelector(
        (state) => state.application.userCameFromAnotherSite,
    );
    function handleClick() {
        if (userCameFromAnotherSite) {
            router.push('/');
            return;
        }
        router.back();
    }

    return (
        <main>
            <h1>Resume</h1>
            <Button onClick={handleClick}>Go back</Button>
        </main>
    );
}
