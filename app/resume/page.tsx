'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../libs/components/button/button.component';
import { shouldWeRedirectUserToIndex } from '../../libs/components/user-came-from-another-site-setter/should-we-redirect-user-to-index.util';
import { useTypedSelector } from '../../libs/store/store';

export default function Resume() {
    const router = useRouter();
    const userCameFromAnotherSite = useTypedSelector(
        (state) => state.application.userCameFromAnotherSite,
    );
    function handleClick() {
        if (shouldWeRedirectUserToIndex(userCameFromAnotherSite)) {
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
