import { render, screen, waitFor } from "@testing-library/react";
import Radio from "./Radio";
import userEvent from "@testing-library/user-event";

test("Testing the radio button by user event", async () => {
  render(<Radio />);
  const genderValue = screen.getByTestId("genderValue");
  const radioButtons = screen.getAllByRole("radio");
  // checking the default text
  expect(genderValue).toHaveTextContent("Please select a gender first");

  // checking the radio buttons click
  for (let i = 0; i < radioButtons.length; i++) {
    userEvent.click(radioButtons[i]);
    await waitFor(() => {
      expect(genderValue).toHaveTextContent(
        radioButtons[i].getAttribute("value")
      );
    });
  }
});
