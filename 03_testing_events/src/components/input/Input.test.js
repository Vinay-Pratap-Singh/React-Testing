const { render, screen, fireEvent } = require("@testing-library/react");
const { default: Input } = require("./Input");

test("Testing the input field", () => {
  render(<Input />);
  const nameInputBox = screen.getByTestId("name");
  expect(nameInputBox).toBeInTheDocument();
  expect(nameInputBox).toHaveAttribute("type", "text");
  expect(nameInputBox).toHaveAttribute("placeholder", "Enter your name");
  expect(nameInputBox).toHaveAttribute("id", "name");

  fireEvent.change(nameInputBox, { target: { value: "vinay" } });
  expect(nameInputBox.value).toBe("vinay");
  const displayName = screen.getByTestId("displayName");
  expect(displayName).toHaveTextContent("Entered Name : vinay");
});
