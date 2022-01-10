import { render, screen } from "@testing-library/vue";
import App from "../.././App.vue";

test("increments value on click", async () => {
  // The `render` method renders the component into the document.
  // It also binds to `screen` all the available queries to interact with
  // the component.
  render(App);

  // queryByText returns the first matching node for the provided text
  // or returns null.
  expect(
    await screen.findByText("Welcome to Your Vue.js App")
  ).toBeInTheDocument();
});
