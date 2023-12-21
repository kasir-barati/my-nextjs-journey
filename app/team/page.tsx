'use client';

import { Button } from '../../libs/components/button/button.component';

export default function Team() {
    function handleClick(): void {
        window.history.back();
    }

    return (
        <main>
            <h1>Team</h1>
            <Button onClick={handleClick}>Go back</Button>
        </main>
    );
}
