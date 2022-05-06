import { default as Form } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('SearchForm', () => {

    test('it renders a form', () => {
        renderWithReduxProvider(<Form />);
        let form = screen.getByRole('form');
        expect(form).toBeInTheDocument();;
    });


    test('button exists',  async () => {
        renderWithReduxProvider(<Form />);
        const btn = screen.getByRole('formbutton');
        expect(btn.textContent).toBe("START");
    });
    

});

