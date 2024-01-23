const { render } = require("@testing-library/react");
const { default: App } = require("./App");

// snapshot takes the code and matches the change of code by maintaing a snapshot file by extension name of .snap

test("snapshot testing", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
