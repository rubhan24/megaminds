import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { default as Leaderboard } from '.';

describe("Leaderboard component", () => {


    test('button exists',  async () => {
       renderWithReduxProvider(<Leaderboard />);
        const counter = screen.getByRole('leaderboardbtn');
        expect(counter.textContent).toBe("Leaderboard");
    });



});

