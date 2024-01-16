const { render, screen, fireEvent } = require("@testing-library/react");
const { default: CheckBox } = require("./CheckBox");

test("Testing the checkbox", () => {
  render(<CheckBox />);
  const agreement = screen.getByTestId("agreement");
  const agreementButton = screen.getByTestId("agreementButton");
  expect(agreement).not.toBeChecked();
  expect(agreementButton).toBeDisabled();

  fireEvent.click(agreement);

  expect(agreement).toBeChecked();
  expect(agreementButton).not.toBeDisabled();

  fireEvent.click(agreement);
  expect(agreement).not.toBeChecked();
  expect(agreementButton).toBeDisabled();
});
