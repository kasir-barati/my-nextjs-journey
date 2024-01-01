'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../libs/components/button/button.component';
import { shouldWeRedirectUserToIndex } from '../../libs/components/pathnames/should-we-redirect-user-to-index.util';
import { usePathnames } from '../../libs/components/pathnames/use-pathnames.hook';

export default function Resume() {
    const router = useRouter();
    const { getPathnames } = usePathnames();
    const pathnames = getPathnames();
    const handleClick = () => {
        if (shouldWeRedirectUserToIndex(pathnames)) {
            router.push('/');
        } else {
            router.push(pathnames[pathnames.length - 2]);
        }
    };

    return (
        <main>
            <h1>Resume</h1>
            <Button onClick={handleClick}>Go back</Button>
        </main>
    );
}
