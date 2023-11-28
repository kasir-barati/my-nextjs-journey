import {
    ConfigureStoreOptions,
    configureStore,
} from '@reduxjs/toolkit';

export function createStore(
    preloadedState?: ConfigureStoreOptions['preloadedState'],
) {
    return configureStore({
        reducer: {
            // [backendApi.reducerPath]: backendApi.reducer,
            // auth: authReducer,
        },
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware();
            // .concat(backendApi.middleware);
        },
        preloadedState,
    });
}
export const store = createStore();
