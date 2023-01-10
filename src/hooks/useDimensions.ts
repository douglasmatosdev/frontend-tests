import { RefObject, useEffect } from "react";

export const useDimensions = (element: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (!element?.current?.style) return;

    element.current.style.width = "100vw";
    element.current.style.height = "100vh";
  }, [element]);
};
