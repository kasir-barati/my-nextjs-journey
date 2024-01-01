import Link from 'next/link';

interface Navbar {
    path: string;
    name: string;
    title?: string;
}

export interface NavbarProps {
    items: Navbar[];
}

export function Navbar({ items }: Readonly<NavbarProps>) {
    return (
        <div>
            {items.map(({ title, name, path }, index) => (
                <span key={`${path}${name}`}>
                    <Link href={path} title={title ?? name}>
                        {name}
                    </Link>
                    &nbsp;
                    {index !== items.length - 1 && '|'}
                    &nbsp;
                </span>
            ))}
        </div>
    );
}
