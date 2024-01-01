'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Navbar, NavbarProps } from '../navbar/navbar.component';
import { PathnamesProvider } from '../pathnames/pathnames.provider';

interface ApplicationProps {
    navbarItems: NavbarProps['items'];
    // store: ToolkitStore;
}

export function Application({
    navbarItems,
    children,
}: Readonly<PropsWithChildren<ApplicationProps>>) {
    return (
        <Provider store={store}>
            <PathnamesProvider>
                <Navbar items={navbarItems} />
                {children}
            </PathnamesProvider>
        </Provider>
    );
}
