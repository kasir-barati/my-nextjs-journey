import { render } from '@testing-library/react';
import Home from './page';

describe('MyApp', () => {
    it('should show app', () => {
        const screen = render(<Home />);

        expect(screen.queryByText('Hi')).toBeInTheDocument();
    });
});
