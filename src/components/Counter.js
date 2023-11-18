import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch();


  const incrementHandler = () => {
    dispatch({type: "increment"});
  }

  const decrementHandler = () => {
    dispatch({type: "decrement"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>증감 카운터</button>
      <button onClick={decrementHandler}>감소 카운터</button>
    </main>
  );
};

export default Counter;
