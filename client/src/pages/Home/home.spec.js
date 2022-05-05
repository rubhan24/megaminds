import { default as Home } from '.';
import { render, screen } from '@testing-library/react';


describe('Home', () => {

    test('it renders the homepage', () => {
        renderWithReduxProvider(<Home />);
        const heading = screen.queryAllByRole('heading')[0]
        expect(heading.textContent).toContain('MasterMinds!');
    });
    test("it renders Home component", () => {
        renderWithReduxProvider(<Home />);
        let home = screen.getByRole("Home");
        expect(home).toBeInTheDocument();
      });

});




