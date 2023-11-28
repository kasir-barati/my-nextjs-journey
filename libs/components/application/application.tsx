import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

interface ApplicationProps extends PropsWithChildren {
    store: ToolkitStore;
}

export function Application({ children, store }: ApplicationProps) {
    return <Provider store={store}>{children}</Provider>;
}
