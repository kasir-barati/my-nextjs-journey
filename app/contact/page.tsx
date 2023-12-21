import { headers } from 'next/headers';
import Link from 'next/link';

export default function Contact() {
    const headersList = headers();
    const referer = headersList.get('referer');
    const baseUrl = 'http://localhost:3001';
    let url = referer ?? baseUrl;

    // According to my experiences when you enter directly to this page let's say from www.google.com, referer would be null. As such our baseUrl will be assigned to url variable and this if is just defensive programming :grin:
    if (!url.startsWith(baseUrl)) {
        url = baseUrl;
    }

    return (
        <main>
            <h1>Contact Us</h1>
            <h2>
                Server side component: That's why we cannot use
                next/router or next/navigation. Also we cannot use
                onClick or other on* handlers.
            </h2>
            <Link href={url}>Go back</Link>
        </main>
    );
}
