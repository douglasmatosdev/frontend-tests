import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { Counter } from "../../components/Counter";
import { useCounter } from "../../hooks/useCounter";

const renderCounter = () => {
  render(<Counter />);
};

describe("useCounter()", () => {
  it("should return initialCount equals zero", () => {
    const { result } = renderHook(useCounter);

    expect(result.current.counter).toBe(0);
  });

  it("should increment one when button increment has clicked", () => {
    renderCounter();

    const button = screen.getByRole("button", { name: /increment/i });

    fireEvent.click(button);

    const span = screen.getByTestId("counter-value");

    expect(span).toHaveTextContent("1");
  });

  it("should increment one when button decrement has clicked", async () => {
    renderCounter();

    const button = screen.getByRole("button", { name: /decrement/i });

    fireEvent.click(button);

    const span = await screen.getByTestId("counter-value");

    expect(span).toHaveTextContent("-1");
  });
});
