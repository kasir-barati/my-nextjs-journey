import { createSlice } from '@reduxjs/toolkit';

export interface ApplicationState {
    darkMode: boolean;
}

const applicationSlice = createSlice({
    name: 'application',
    initialState: { darkMode: false } as ApplicationState,
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
