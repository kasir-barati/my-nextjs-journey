import { render } from '@testing-library/react';
import { Router } from 'next/router';
import Sinon from 'sinon';
import MyPage from './page';

describe('MyPage', () => {
    it('should shows app', () => {
        const routerStub = Sinon.createStubInstance(Router);

        const screen = render(
            <MyPage
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
