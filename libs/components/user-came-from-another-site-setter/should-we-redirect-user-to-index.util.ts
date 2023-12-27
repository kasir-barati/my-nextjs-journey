import { usePathname } from 'next/navigation';
import { ApplicationState } from '../application/application.state';
import { UserCameFromAnotherSite } from './user-came-from-another-site.enum';

export function shouldWeRedirectUserToIndex(
    userCameFromAnotherSite: ApplicationState['userCameFromAnotherSite'],
) {
    const pathname = usePathname();

    return (
        [
            UserCameFromAnotherSite.InitialState,
            UserCameFromAnotherSite.UserWasNotInOurApp,
        ].includes(userCameFromAnotherSite.state) &&
        userCameFromAnotherSite.currentPathname.length === 0
    );
}
