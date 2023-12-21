'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../libs/components/button/button.component';

export default function Home() {
    const router = useRouter();

    return (
        <main>
            <h1>Hi</h1>
            <Button onClick={() => router.back()}>Go back</Button>
        </main>
    );
}
