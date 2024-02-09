import { render, screen, waitFor } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Button from "./Button";
test("Testing increment count on button click by user event", async () => {
  render(<Button />);
  const btn = screen.getByRole("button");
  const para = screen.getByTestId("para");
  expect(para).toHaveTextContent("Count : 0");
  userEvent.click(btn);
  // using waitFor for checking that the value updated or not
  await waitFor(() => {
    expect(para).toHaveTextContent("Count : 1");
  });
});
