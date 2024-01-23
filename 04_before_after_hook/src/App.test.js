import { render, screen } from "@testing-library/react";
import App from "./App";

// before all, before each are used to perform operation like db clean, env setup and all before running a test case or everytime when a test case runs

// beforeEach(() => {
//   console.log("Test case to run before each test cases");
// });

// afterEach(() => {
//   console.log("Test case to run after each test cases");
// });

beforeAll(() => {
  console.log("Test case to run before all test cases");
});

afterAll(() => {
  console.log("Test case to run after all test cases");
});

test("renders learn react link 1", () => {
  console.log("Test 1");
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders learn react link 2", () => {
  console.log("Test 1");
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders learn react link 3", () => {
  console.log("Test 1");
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
