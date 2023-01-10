import { render, renderHook, screen, within } from "@testing-library/react";
import { useRef } from "react";
import { Card } from "../../components/Card";
import { useDimensions } from "../../hooks/useDimensions";

const renderCard = () => {
  render(<Card />);
};

const renderEl = (ref) => {
  const El = () => <div data-testid="El-div" ref={ref}></div>;

  render(<El />);
};

describe("useDimensions", () => {
  const css = "width: 100vw; height: 100vh";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should set width and height when render <Card />", () => {
    renderCard();

    const card = screen.getByTestId("card-container");

    expect(card).toHaveStyle(css);
  });

  it("should be called useDimensions() with ref element", () => {
    const ref = renderHook(() => useRef(null)).result.current;
    renderEl(ref);
    renderHook(() => useDimensions(ref));

    expect(screen.getByTestId("El-div")).toHaveStyle(css);
  });

  it("do not set width height when ref is null", () => {
    const ref = renderHook(() => useRef(null)).result.current;

    renderEl(null);

    renderHook(() => useDimensions(ref));

    expect(screen.getByTestId("El-div").style.cssText).toEqual("");
  });
});
