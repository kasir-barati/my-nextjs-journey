import { render } from '@testing-library/react';
import Home from './page';

describe('MyPage', () => {
    it('should show page', () => {
        const screen = render(<Home />);

        expect(screen.queryByText('Hi')).toBeInTheDocument();
    });
});
