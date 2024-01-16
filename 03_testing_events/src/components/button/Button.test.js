const { render, screen, fireEvent } = require("@testing-library/react");
const { default: Buttton } = require("./Buttton");

test("Testing the button component", () => {
  render(<Buttton />);
  const toggleButton = screen.getByTestId("toggleButton");
  const loaded = screen.getByTestId("loaded");
  expect(loaded).toBeInTheDocument();
  fireEvent.click(toggleButton);
  const loading = screen.getByTestId("loading");
  expect(loading).toBeInTheDocument();
});
