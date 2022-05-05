import { screen } from "@testing-library/react";
import Quiz from ".";

test("it renders Quiz component", () => {
    renderWithReduxProvider(<Quiz />);
    let questionaire = screen.getByRole("Questionaire");
    expect(questionaire).toBeInTheDocument();
  });

  
