import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {default as NameInputFour} from ".";

describe('NameInputFour', () => {
    // test('it renders', () => {
    //     render(<NameInputFour />);
    //     const heading = screen.getAllByRole('heading');
    //     expect(heading.textContent).toMatch("Name:");
    // });

    test('name exists', async () => {
        await act(async () => render(<NameInputFour />));
        const Name = screen.getByTestId("name4")
        expect(Name).toBeInTheDocument();
    })
});