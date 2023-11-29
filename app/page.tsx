'use client';

import { Application } from '../libs/components/application/application';
import { store } from '../libs/store/store';

export default function MyPage() {
    return (
        <Application store={store}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: 13,
                    fontSize: 70,
                }}
            >
                HI
            </div>
        </Application>
    );
}
