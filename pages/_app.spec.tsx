import { render } from '@testing-library/react';
import { Router } from 'next/router';
import Sinon from 'sinon';
import MyApp from './_app';

describe('MyApp', () => {
    it('should shows app', () => {
        const routerStub = Sinon.createStubInstance(Router);

        const screen = render(
            <MyApp
                Component={Foo}
                router={routerStub}
                pageProps={{ title: 'Hello' }}
            />,
        );

        expect(screen.queryByText('Hello')).toBeInTheDocument();
    });
});

function Foo({ title }: { title: string }) {
    return <p>{title}</p>;
}
