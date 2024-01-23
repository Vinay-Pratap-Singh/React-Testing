const { render } = require("@testing-library/react");
const { default: App } = require("./App");

test("snapshot testing", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
