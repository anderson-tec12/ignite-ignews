/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import "identity-obj-proxy";

import { render, screen } from "@testing-library/react";
import { Header } from ".";
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

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false];
    },
  };
});

describe("Header Component", () => {
  it("renders correctly", () => {
    render(<Header />);

    // debug();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
