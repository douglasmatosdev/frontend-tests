import { useState } from "react";

export const useCounter = (): {
  counter: number;
  increment: () => void;
  decrement: () => void;
} => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return { counter, increment, decrement };
};
