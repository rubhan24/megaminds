import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { default as Leaderboard } from '.';

describe("Leaderboard component", () => {
    test('button exists', async () => {
        await act(async () => render(<Leaderboard />));
        expect(leaderbutton).toBeTruthy();
        expect(leaderbutton.textContent).toEqual("Leaderboard")
    });

    test('role of leaderboardbtn',  async () => {
        await act(async () => render(<Leaderboard />));
        const counter = screen.getByRole('leaderboardbtn');
        expect(counter.textContent).toBe("Leaderboard");
    });



});