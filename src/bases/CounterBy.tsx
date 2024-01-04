import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}
const CounterBy = ({ initialValue = 5}: Props) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  console.log(initialValue);

  const handleCLick = (number: number) => {
    setCounterState(({ clicks, counter}) => ({
      clicks: clicks + 1,
      counter: counter + number
    }));
  };
  return (
    <>
      <div>CounterBy: {counterState.counter}</div>
      <div>Clicks: {counterState.clicks}</div>

      <button onClick={() =>handleCLick(1)}>+1</button>
      <button onClick={() =>handleCLick(5)}>+5</button>
    </>
  );
};

export default CounterBy