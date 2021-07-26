/**
 * @jest-environment jsdom
 * @moduleNameMapper {"^.+\\.(css|less|scss)$": "identity-obj-proxy"}
 */
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import "identity-obj-proxy";

import { render, screen } from "@testing-library/react";
import { SignButton } from ".";
import { useSession } from "next-auth/client";
import { mocked } from "ts-jest/utils";

jest.mock("next-auth/client");

describe("SignButton Component", () => {
  it("renders correctly when user is not authenticated", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);
    render(<SignButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: "John Doe", email: "johndoe@exemple.com" },
        expires: "fake-expires",
        activeSubscription: null,
      },
      false,
    ]);
    render(<SignButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
