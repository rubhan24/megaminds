import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NameInputThree from ".";

describe('NameInputThree', () => { 
    test('name exists', async () => {
        await act(async () => renderWithReduxProvider(<NameInputThree />));
        const Name = screen.getByTestId("name3")
        expect(Name).toBeInTheDocument();
    })
});