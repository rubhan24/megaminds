import { screen } from "@testing-library/react";
import Results from ".";
import { act } from "react-dom/test-utils";

describe('button role', () => {
    test('button exists', async () => {
        await act(async () => renderWithReduxProvider(<Results />))
        const btn = screen.getByRole("playAgain")
        expect(btn.textContent).toEqual("Play Again!")
    })

    test('it renders a form', () => {
        renderWithReduxProvider(<Results />);
        let table = screen.getByRole('resultstable');
        expect(table).toBeInTheDocument();;
    });

    test("the table is rendered if the scores exist", async () => {
        jest.spyOn(React, "useEffect").mockImplementation((f) => f());
        await act(async () => renderWithReduxProvider(<Results />));
        const table = screen.getByTestId("table");
        expect(table).toBeInTheDocument();
    });

    test('table rows exists', async () => {
        await act(async () => renderWithReduxProvider(<Results />));
        const tr = screen.getByTestId("tr")
        expect(tr).toBeInTheDocument();
    });

});
