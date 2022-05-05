import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NameInputFour from ".";

describe('NameInputFour', () => { 
    test('name exists', async () => {
        await act(async () => renderWithReduxProvider(<NameInputFour />));
        const Name = screen.getByTestId("name4")
        expect(Name).toBeInTheDocument();
    })
});