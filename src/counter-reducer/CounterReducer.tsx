import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import { doIncreaseBy, doReset } from "./actions/actions";



const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

/* las action llevan un type , y un payload() */

const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };
  const handleIncreaseBy = (value :number) => {
    dispatch(doIncreaseBy(value));
  };
  return (
    <>
      <h1>CounterReducer Segmentado: {counterState.counter}</h1>

      <pre>
        {JSON.stringify( counterState, null, 2)}
      </pre>

      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>10</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default CounterReducerComponent;
