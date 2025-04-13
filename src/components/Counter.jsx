import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/CounterSlice';
import './Counter.css'; // ← import the CSS

const Counter = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-value">{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;