import { render, screen } from "@testing-library/react";
import App from "./App";

// checking that the app has h1, h2 and link tag
test("Checking that the element h1, h2 and anchor tag", () => {
  render(<App />);
  const headings = screen.queryAllByRole("heading");
  // checking that heading are there in the document or not
  for (let i = 0; i < headings.length; i++) {
    expect(headings[i]).toBeInTheDocument();
  }

  // checking that 2 headings are there or not
  const totalHeadings = headings.length;
  expect(totalHeadings).toBe(2);

  // checking that the link is there in the document or not
  const link = screen.getByTestId("linkedin_url");
  expect(link).toBeInTheDocument();
});

// testing the headings
test("Testing the headings of app component", () => {
  render(<App />);
  const heading = screen.getAllByRole("heading");
  expect(heading[0]).toHaveTextContent("React App Testing");
  expect(heading[1]).toHaveTextContent(
    "Learning the react app testing using jest and react testing library"
  );
});

// testing the anchor tag
test("Testing the anchor tag of app component", () => {
  render(<App />);
  const link = screen.getByTestId("linkedin_url");
  expect(link).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/vinay-pratap-singh-harvi-4b265a212/"
  );
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noreferrer");
});
