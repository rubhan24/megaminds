import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { default as Leaderboard } from ".";

describe("Leaderboard page", () => {
    test("the table is rendered if the scores exist", async () => {
        jest.spyOn(React, "useEffect").mockImplementation((f) => f());
        await act(async () => renderWithReduxProvider(<Leaderboard />));
        const table = screen.getByTestId("table");
        expect(table).toBeInTheDocument();
    });

    test('table rows exists', async () => {
        await act(async () => renderWithReduxProvider(<Leaderboard />));
        const tr = screen.getByTestId("tr")
        expect(tr).toBeInTheDocument();
    })
});