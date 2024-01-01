import { createSlice } from '@reduxjs/toolkit';

export interface ApplicationState {
    darkMode: boolean;
}

const applicationSlice = createSlice<
    ApplicationState,
    {
        darkMode(state: ApplicationState): void;
        lightMode(state: ApplicationState): void;
    },
    'application',
    any
>({
    name: 'application',
    initialState: {
        darkMode: false,
    },
    reducers: {
        darkMode(state) {
            state.darkMode = true;
        },
        lightMode(state) {
            state.darkMode = false;
        },
    },
});

export const { darkMode, lightMode } = applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;
