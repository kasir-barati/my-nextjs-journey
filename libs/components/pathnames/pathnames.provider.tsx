'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import {
    IPathnamesContext,
    PathnamesContext,
} from './pathnames.context';

export function PathnamesProvider({
    children,
}: Readonly<PropsWithChildren>) {
    const sessionStorageKey = 'pathnames';
    const syncPathnames: IPathnamesContext['syncPathnames'] = (
        newPathnames,
    ) => {
        sessionStorage.setItem(
            sessionStorageKey,
            JSON.stringify(newPathnames),
        );
    };
    const getPathnames: IPathnamesContext['getPathnames'] = () => {
        const sessionStorageValue =
            sessionStorage.getItem(sessionStorageKey) ?? '[]';
        const pathnames = JSON.parse(sessionStorageValue);

        return pathnames;
    };
    const pathname = usePathname();

    useEffect(() => {
        const pathnames = getPathnames();
        syncPathnames([...pathnames, pathname]);
    }, [pathname]);

    return (
        <PathnamesContext.Provider
            value={{ getPathnames, syncPathnames }}
        >
            {children}
        </PathnamesContext.Provider>
    );
}
