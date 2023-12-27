import { createSlice } from '@reduxjs/toolkit';
import { UserCameFromAnotherSite } from '../user-came-from-another-site-setter/user-came-from-another-site.enum';

export interface ApplicationState {
    darkMode: boolean;
    userCameFromAnotherSite: {
        state: UserCameFromAnotherSite;
        currentPathname: string;
    };
}

const applicationSlice = createSlice<
    ApplicationState,
    {
        darkMode(state: ApplicationState): void;
        lightMode(state: ApplicationState): void;
        userWasInOurApp(
            state: ApplicationState,
            action: { payload: { currentPathname: string } },
        ): void;
        userWasNotInOurApp(state: ApplicationState): void;
        userLeftOurApp(state: ApplicationState): void;
    },
    'application',
    any
>({
    name: 'application',
    initialState: {
        darkMode: false,
        userCameFromAnotherSite: {
            state: UserCameFromAnotherSite.InitialState,
            currentPathname: '',
        },
    },
    reducers: {
        darkMode(state) {
            state.darkMode = true;
        },
        lightMode(state) {
            state.darkMode = false;
        },
        userWasInOurApp(state, { payload: { currentPathname } }) {
            state.userCameFromAnotherSite = {
                state: UserCameFromAnotherSite.UserWasInOurApp,
                currentPathname,
            };
        },
        userWasNotInOurApp(state) {
            state.userCameFromAnotherSite = {
                state: UserCameFromAnotherSite.UserWasNotInOurApp,
                currentPathname: '',
            };
        },
        userLeftOurApp(state) {
            state.userCameFromAnotherSite = {
                state: UserCameFromAnotherSite.InitialState,
                currentPathname: '',
            };
        },
    },
});

export const {
    darkMode,
    lightMode,
    userWasInOurApp,
    userWasNotInOurApp,
    userLeftOurApp,
} = applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;
