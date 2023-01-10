import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>decrement</button>
      <span data-testid="counter-value">{counter}</span>
      <button onClick={increment}>increment</button>
    </div>
  );
};
