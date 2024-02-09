import { render, screen, waitFor } from "@testing-library/react";
import Text_Input from "./Text_Input";
import userEvent from "@testing-library/user-event";
test("Testing the input text change using user event", async () => {
  render(<Text_Input />);
  const para = screen.getByTestId("para");
  const input = screen.getByTestId("inputBox");
  // default text test
  expect(para).toHaveTextContent("Enter the name in input field");

  // input change test
  userEvent.type(input, "vinay");
  await waitFor(() => {
    expect(para).toHaveTextContent("vinay");
  });
});
