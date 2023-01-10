import { render, screen } from "@testing-library/react";
import { Card } from "../../components/Card";

describe("<Card />", () => {
  it("should render <Card />", () => {
    render(<Card />);

    const cardContainer = screen.getByTestId("card-container");

    expect(cardContainer).toBeInTheDocument();
  });
});
