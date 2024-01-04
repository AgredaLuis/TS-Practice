import { useCounter } from "../hooks/useCounter";

const CounterHook = () => {
  
 const { counter , elementToAnimate, handleCLick} = useCounter({
   maxCount: 15
 });
  return (
    <>
      <h1>CounterHook</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleCLick}>+1</button>
    </>
  );
};

export default CounterHook;
