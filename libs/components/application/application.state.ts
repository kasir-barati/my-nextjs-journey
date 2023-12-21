import { createSlice } from '@reduxjs/toolkit';

export interface ApplicationState {
    darkMode: boolean;
    userCameFromAnotherSite: boolean;
}

const applicationSlice = createSlice<
    ApplicationState,
    {
        darkMode(state: ApplicationState): void;
        lightMode(state: ApplicationState): void;
        userWasInWebsite(state: ApplicationState): void;
        userLeftOurWebsite(state: ApplicationState): void;
    },
    'application',
    any
>({
    name: 'application',
    initialState: {
        darkMode: false,
        userCameFromAnotherSite: false,
    },
    reducers: {
        darkMode(state) {
            state.darkMode = true;
        },
        lightMode(state) {
            state.darkMode = false;
        },
        userWasInWebsite(state) {
            state.userCameFromAnotherSite = true;
        },
        userLeftOurWebsite(state) {
            state.userCameFromAnotherSite = false;
        },
    },
});

export const {
    darkMode,
    lightMode,
    userWasInWebsite,
    userLeftOurWebsite,
} = applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;
