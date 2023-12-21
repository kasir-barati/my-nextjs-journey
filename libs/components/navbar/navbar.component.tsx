import Link from 'next/link';

interface Navbar {
    path: string;
    name: string;
    title?: string;
}

export interface NavbarProps {
    navbars: Navbar[];
}

export function Navbar({ navbars }: Readonly<NavbarProps>) {
    return (
        <div>
            {navbars.map(({ title, name, path }) => (
                <Link
                    key={`${path}${name}`}
                    href={path}
                    title={title ?? name}
                >
                    {name}
                </Link>
            ))}
        </div>
    );
}
