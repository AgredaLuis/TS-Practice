import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction = 
  | { type: 'increaseBy'; payload: {value: number}}
  | { type: 'reset'; }
/* las action llevan un type , y un payload() */

const counterReducer = (state : CounterState, action: CounterAction): CounterState => {
 switch (action.type) {
   case 'reset':
    return{
      counter: 0,
      changes: 0,
      previous: 0
    }
    case 'increaseBy':
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previous: state.counter
      }
    default:
      return state;
 }
};

const Counter = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };
  const handleIncreaseBy = (value :number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };
  return (
    <>
      <h1>Counter: {counterState.counter}</h1>

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

export default Counter;
