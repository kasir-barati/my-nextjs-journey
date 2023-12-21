'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import {
    userLeftOurWebsite,
    userWasInWebsite,
} from '../application/application.state';

export function UserCameFromAnotherSiteSetter({
    children,
}: Readonly<PropsWithChildren>) {
    const userCameFromAnotherSite = useTypedSelector(
        (state) => state.application.userCameFromAnotherSite,
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (document.referrer) {
            dispatch(userWasInWebsite());
        }

        return () => {
            dispatch(userLeftOurWebsite());
        };
    }, [userCameFromAnotherSite]);

    return <>{children}</>;
}
