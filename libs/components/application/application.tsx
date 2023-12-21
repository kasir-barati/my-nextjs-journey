'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Navbar, NavbarProps } from '../navbar/navbar.component';
import { UserCameFromAnotherSiteSetter } from '../user-came-from-another-site-setter/user-came-from-another-site-setter.component';

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
            <UserCameFromAnotherSiteSetter>
                <Navbar navbars={navbarItems} />
                {children}
            </UserCameFromAnotherSiteSetter>
        </Provider>
    );
}
