import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "../";


describe('Home Screen: check html tags and render', () => {
  it('should be rendered as default', () => {
    render(
      <Home />
    )

    expect(screen.getByTestId("home-screen")).toBeInTheDocument();
  })

  it('should be rendered and clicked button', () => {
    const { container } = render(
      <Home />
    )

    const buttonHome = container.querySelector("div")?.querySelector("#button-home") as HTMLElement;

    fireEvent.click(buttonHome);

    expect(screen.getByTestId("home-screen")).toBeInTheDocument();
  })
})
