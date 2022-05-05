import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import NameInputTwo from ".";

describe('NameInputTwo', () => { 
    test('name exists', async () => {
        await act(async () => renderWithReduxProvider(<NameInputTwo />));
        const Name = screen.getByTestId("name2")
        expect(Name).toBeInTheDocument();
    })
});