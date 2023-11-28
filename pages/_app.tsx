import type { AppProps } from 'next/app';
import { Application } from '../libs/components/application/application';
import { store } from '../libs/store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Application store={store}>
            <Component {...pageProps} />
        </Application>
    );
}

export default MyApp;
