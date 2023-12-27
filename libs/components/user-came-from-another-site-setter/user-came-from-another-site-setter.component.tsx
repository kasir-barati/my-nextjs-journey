'use client';

import { usePathname } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import {
    userLeftOurApp,
    userWasInOurApp,
    userWasNotInOurApp,
} from '../application/application.state';
import { UserCameFromAnotherSite } from './user-came-from-another-site.enum';

export function UserCameFromAnotherSiteSetter({
    children,
}: Readonly<PropsWithChildren>) {
    const userCameFromAnotherSite = useTypedSelector(
        (state) => state.application.userCameFromAnotherSite,
    );
    const dispatch = useAppDispatch();
    const pathname = usePathname();

    useEffect(() => {
        if (
            userCameFromAnotherSite.state ===
                UserCameFromAnotherSite.InitialState &&
            !userCameFromAnotherSite.currentPathname
        ) {
            dispatch(userWasNotInOurApp());
        } else if (
            userCameFromAnotherSite.state ===
            UserCameFromAnotherSite.UserWasNotInOurApp
        ) {
            dispatch(userWasInOurApp({ currentPathname: pathname }));
        }

        return () => {
            dispatch(userLeftOurApp());
        };
    }, [userCameFromAnotherSite]);

    return <>{children}</>;
}
