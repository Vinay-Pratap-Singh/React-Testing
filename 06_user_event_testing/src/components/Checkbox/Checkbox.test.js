import { render, screen, waitFor } from "@testing-library/react";
import Checkbox from "./Checkbox";
import userEvent from "@testing-library/user-event";

test("Testing the checkbox using userevent", async () => {
  render(<Checkbox />);
  const checkBox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  // by default checkbox should be unchecked
  expect(checkBox).not.toBeChecked();
  // by default button should be disabled
  expect(button).toBeDisabled();

  // testing after checking the checkbox
  userEvent.click(checkBox);
  await waitFor(() => {
    expect(checkBox).toBeChecked();
  });
  expect(button).not.toBeDisabled();
});
