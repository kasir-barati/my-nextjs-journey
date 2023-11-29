'use client';

import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

interface ApplicationProps extends PropsWithChildren {
    // store: ToolkitStore;
}

export function Application({ children }: ApplicationProps) {
    return <Provider store={store}>{children}</Provider>;
}
