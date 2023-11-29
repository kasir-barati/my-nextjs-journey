import {
    ConfigureStoreOptions,
    configureStore,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applicationReducer } from '../components/application/application.state';

export function createStore(
    preloadedState?: ConfigureStoreOptions['preloadedState'],
) {
    return configureStore({
        reducer: {
            // [backendApi.reducerPath]: backendApi.reducer,
            application: applicationReducer,
        },
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware();
            // .concat(backendApi.middleware);
        },
        preloadedState,
    });
}
export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> =
    useSelector;
