import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import {default as NameInputThree} from ".";

describe('NameInputThree', () => { 
    test('name exists', async () => {
        await act(async () => render(<NameInputThree />));
        const Name = screen.getByTestId("name3")
        expect(Name).toBeInTheDocument();
    })
});