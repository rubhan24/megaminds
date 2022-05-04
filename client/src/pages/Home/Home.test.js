import { default as Home } from '.';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


describe('Home', () => {

    test('it renders the homepage', () => {
        render(<Home />, { wrapper: MemoryRouter })
        const heading = screen.getByRole('Header')
        expect(heading.textContent).toContain('MasterMinds!');
    });

});