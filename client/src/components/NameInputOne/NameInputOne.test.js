import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {default as NameInputOne} from ".";

describe('NameInputOne', () => { 
    test('name exists', async () => {
        await act(async () => renderWithReduxProvider(<NameInputOne />));
        const Name = screen.getByTestId("name1")
        expect(Name).toBeInTheDocument();
    })
});