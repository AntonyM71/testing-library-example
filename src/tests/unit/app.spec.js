import { render, screen } from "@testing-library/vue";
import App from "../.././App.vue";

describe("App", () => {
  test("it shows the welcome message", async () => {
    // The `render` method renders the component into the document.
    // It also binds to `screen` all the available queries to interact with
    // the component.
    render(App);

    // findByText returns the first matching node for the provided text
    // or returns null. It will wait for up to 1s for the component to appear
    expect(
      await screen.findByText("Welcome to Your Vue.js App")
    ).toBeInTheDocument();
  });
});
