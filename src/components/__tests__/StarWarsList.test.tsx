import React from "react";
import { render, screen } from "@testing-library/react";
import StarWarsList from "../StarWarsList";

const mockCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    url: "https://swapi.dev/api/people/1/",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    url: "https://swapi.dev/api/people/4/",
  },
];

describe("StarWarsList", () => {
  test("renders a list of characters", () => {
    render(<StarWarsList characters={mockCharacters} />);

    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Darth Vader/i)).toBeInTheDocument();
  });

  test("renders character details correctly", () => {
    render(<StarWarsList characters={mockCharacters} />);

    const luke = screen.getByText(/Luke Skywalker/i);
    const darth = screen.getByText(/Darth Vader/i);

    expect(luke).toBeInTheDocument();
    expect(screen.getByText(/Height: 172 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass: 77 kg/i)).toBeInTheDocument();

    expect(darth).toBeInTheDocument();
    expect(screen.getByText(/Height: 202 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass: 136 kg/i)).toBeInTheDocument();
  });

  test("renders placeholder image on error", () => {
    render(<StarWarsList characters={mockCharacters} />);

    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect((img as HTMLImageElement).src).toContain(
        "https://starwars-visualguide.com/assets/img/characters/"
      );
    });
  });
});
