import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {default as NameInputTwo} from ".";

describe('NameInputTwo', () => { 
    test('name exists', async () => {
        await act(async () => render(<NameInputTwo />));
        const Name = screen.getByTestId("name2")
        expect(Name).toBeInTheDocument();
    })
});