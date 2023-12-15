import { decrement, increment } from "../store/actions/counter";
import { useDispatch, useSelector } from "react-redux";

const CounterComponent = () => {
  const countsValue = useSelector((state) => state.counts);
  const dispatch = useDispatch();
  const count = countsValue.count;
  console.log(countsValue);
  return (
    <>
      <h1>Counter Component</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

export default CounterComponent;
