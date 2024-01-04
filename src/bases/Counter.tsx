import { useState } from "react";

interface Props {
  initialValue?: number;
}
const CounterReducerComponent = ({ initialValue = 5}: Props) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const handleCLick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>Counter Reducer: {counter}</h1>

      <button onClick={handleCLick}>+1</button>
    </>
  );
};

export default CounterReducerComponent;
