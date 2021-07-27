import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { ActiveLink } from ".";
import { interopDefault } from "next/dist/next-server/server/load-components";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    // debug();

    expect(getByText("Home")).toBeInTheDocument();
  });

  it("adds active class if the link as currently active", () => {
    const { getByTestId } = render(
      <ActiveLink href="/" activeClassName="active">
        <a data-testid="link">Home</a>
      </ActiveLink>
    );

    // debug();

    expect(getByTestId("link")).toHaveClass("active");
  });
});
