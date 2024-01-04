import { useState } from "react";

interface Props {
  initialValue?: number;
}
const Counter = ({ initialValue = 5}: Props) => {
  const [counter, setCounter] = useState<number>(initialValue);

  console.log(initialValue);

  const handleCLick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <div>Counter: {counter}</div>

      <button onClick={handleCLick}>+1</button>
    </>
  );
};

export default Counter;
