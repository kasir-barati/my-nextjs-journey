'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Navbar, NavbarProps } from '../navbar/navbar.component';

interface ApplicationProps {
    navbarItems: NavbarProps['navbars'];
    // store: ToolkitStore;
}

export function Application({
    navbarItems,
    children,
}: Readonly<PropsWithChildren<ApplicationProps>>) {
    return (
        <Provider store={store}>
            <Navbar navbars={navbarItems} />
            {children}
        </Provider>
    );
}
