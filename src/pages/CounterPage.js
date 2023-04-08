import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

import produce from "immer";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const ADD_TO_COUNT = "add-to-count";

const reducer = (state, action) => {
  switch (action.type) {
     // state update with immer
    case INCREMENT_COUNT:
      state.count = state.count - 1;
      return;
    //  standard state update without immer
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case ADD_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      // throw new Error ('unexpected action type: ' + action.type)
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });
  console.log(state);

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
