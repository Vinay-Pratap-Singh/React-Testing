const { render, screen, fireEvent } = require("@testing-library/react");
const { default: Radio } = require("./Radio");

test("testing the radio input", () => {
  render(<Radio />);
  const radioOptions = screen.getAllByRole("radio");
  radioOptions.forEach((radio) => {
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();
    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });
});
