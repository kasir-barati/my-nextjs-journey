import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import {
    Navbar,
    NavbarProps,
} from '../libs/components/navbar/navbar.component';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<PropsWithChildren>) {
    const navbars: NavbarProps['navbars'] = [
        {
            title: 'Index page',
            name: 'Index',
            path: '/',
        },
        {
            title: 'About us page',
            name: 'About',
            path: '/about',
        },
        {
            title: 'Contact us page',
            name: 'Contact us',
            path: '/contact',
        },
        {
            title: 'Team members',
            name: 'Team',
            path: '/team',
        },
    ];

    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar navbars={navbars} />
                {children}
            </body>
        </html>
    );
}
