import { default as Questionaire } from '.';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchForm', () => {



    test('it renders the questionare', () => {
        renderWithReduxProvider(<Questionaire />);
        let questionairediv = screen.getByRole('questionairediv');
        expect(questionairediv).toBeInTheDocument();;
    });

});


