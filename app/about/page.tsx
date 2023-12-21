'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../../libs/components/button/button.component';

export default function About() {
    const router = useRouter();
    function handleClick() {
        router.back();
    }

    return (
        <main>
            <h1>About</h1>
            <Button onClick={handleClick}>Go back</Button>
        </main>
    );
}
